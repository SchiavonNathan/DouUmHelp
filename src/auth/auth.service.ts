import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserPFService } from '../userpf/userpf.service';
import { UserPJService } from '../userpj/userpj.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcrypt';
import { RegisterAuthPFDto } from './dto/register-authPF.dto';
import { RegisterAuthPJDto } from './dto/register-authPJ.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private readonly userPFService: UserPFService,
    private readonly userPJService: UserPJService,
    private readonly jwtService: JwtService
  ) {}

  async registerPF(dto: RegisterAuthPFDto) {
    const userExists = await this.userPFService.findByEmail(dto.email);
    if (userExists) {
      throw new ConflictException('E-mail já cadastrado!');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.userPFService.createUserPF({
      ...dto,
      password: hashedPassword, 
    });

    return { message: 'Cadastro realizado com sucesso!', user };
  }
  
  async registerPJ(dto: RegisterAuthPJDto) {
    const userExists = await this.userPJService.findByEmail(dto.email);
    if (userExists) {
      throw new ConflictException('E-mail já cadastrado!');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.userPJService.createUserPJ({
      ...dto,
      password: hashedPassword, 
    });

    return { message: 'Cadastro realizado com sucesso!', user };
  }

  async login(dto: LoginAuthDto) {
    const { username, email, cpf, cnpj, password } = dto;
    let user;

    if (email) {
      user = await this.userPFService.findByEmail(email) || await this.userPJService.findByEmail(email);
    } else if (username) {
      user = await this.userPFService.findByUsername(username) || await this.userPJService.findByUsername(username);
    } else if (cpf) {
      user = await this.userPFService.findByCpf(cpf.replace(/\D/g, ''));
    } else if (cnpj) {
      user = await this.userPJService.findByCnpj(cnpj.replace(/\D/g, ''));
    }

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado!');
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new UnauthorizedException('Senha incorreta!');
    }

    const payload = { sub: user.id, role: user.tipo }; 
    const token = this.jwtService.sign(payload);

    return { message: 'Login realizado com sucesso!', token };
  }
}
