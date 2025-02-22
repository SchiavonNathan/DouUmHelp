import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserPFModule } from './userpf/userpf.module';
import { UserPJModule } from './userpj/userpj.module';
import { TasksModule } from './tasks/tasks.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthModule, UserPFModule, UserPJModule, TasksModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AppModule {}
