import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthPFDto  } from './dto/register-authPF.dto';
import { RegisterAuthPJDto } from './dto/register-authPJ.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
