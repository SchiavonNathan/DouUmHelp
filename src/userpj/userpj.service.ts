import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterAuthPJDto } from 'src/auth/dto/register-authPJ.dto';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UserPJService {
  constructor(private prisma: PrismaService) {}

  async createUserPJ(data: RegisterAuthPJDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.prisma.userPJ.create({
        data: {
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            hashPassword: hashedPassword, 
            cnpj: data.cnpj,
            telephone: data.telephone,
        }
    });
  }


  async getUserPJ(id: string) {
    return this.prisma.userPJ.findUnique({ where: { id } });
  }

  async getAllUserPJ() {
    return this.prisma.userPJ.findMany();
  }

  async deleteUserPJ(id: string) {
    return this.prisma.userPJ.delete({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.prisma.userPJ.findUnique({ where: { email } });
  }

  async findByUsername(username: string) {
    return this.prisma.userPJ.findUnique({ where: { username } });
  }   

  async findByCnpj(cnpj: string) {
    return this.prisma.userPJ.findUnique({ where: { cnpj } });
  }

  async updateUserPJ(id: string, data: any) {
    return this.prisma.userPJ.update({ where: { id }, data, });
  }

}
