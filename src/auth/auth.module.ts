import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserPFService } from '../userpf/userpf.service';
import { UserPJService } from '../userpj/userpj.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserPFService, UserPJService, PrismaService],
  exports: [AuthService]
})
export class AuthModule {}
