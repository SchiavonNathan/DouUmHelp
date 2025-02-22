import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserPFService } from '../userpf/userpf.service';
import { UserPJService } from '../userpj/userpj.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userPFService: UserPFService,
    private readonly userPJService: UserPJService
  ) {}

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

    const passwordValid = await compare(password, user.senhaHash); 
    if (!passwordValid) {
      throw new UnauthorizedException('Senha incorreta!');
    }

    return { message: "Login realizado com sucesso!", user };
  }
}
