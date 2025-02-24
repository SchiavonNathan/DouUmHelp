import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthPFDto } from './dto/register-authPF.dto';
import { RegisterAuthPJDto } from './dto/register-authPJ.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 🔹 Cadastro de Pessoa Física (PF)
  @Post('register-pf')
  async registerPF(@Body() dto: RegisterAuthPFDto) {
    return this.authService.registerPF(dto);
  }

  // 🔹 Cadastro de Pessoa Jurídica (PJ)
  @Post('register-pj')
  async registerPJ(@Body() dto: RegisterAuthPJDto) {
    return this.authService.registerPJ(dto);
  }

  // 🔹 Login de qualquer usuário (PF ou PJ)
  @Post('login')
  async login(@Body() dto: LoginAuthDto) {
    return this.authService.login(dto);
  }
}
