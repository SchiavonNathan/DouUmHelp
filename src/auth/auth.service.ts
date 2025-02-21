import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service'; //implementar userService (esperando o Primas)
import { LoginAuthDto } from './dto/login-auth.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
      constructor(private readonly userService: UserService) {}

      async login(dto: LoginAuthDto) {
        const { username, email, cpf, cnpj, password } = dto;
        let user;
    
        if (email) {
          user = await this.userService.findByEmail(email);
        } else if (username) {
          user = await this.userService.findByUsername(username);
        } else if (cpf) {
          user = await this.userService.findByCpf(cpf.replace(/\D/g, '')); 
        } else if (cnpj) {
          user = await this.userService.findByCnpj(cnpj.replace(/\D/g, '')); 
        }
    
        if (!user) {
          throw new UnauthorizedException('Usuário não encontrado!');
        }
    
        const passwordValid = await compare(password, user.password); 
        if (!passwordValid) {
          throw new UnauthorizedException('Senha incorreta!');
        }
    
        return { message: "Login realizado com sucesso!", user };
      }
}
