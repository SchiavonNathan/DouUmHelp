import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class UserPJService {
  constructor(private prisma: PrismaService) {}

  async createUserPJ(data: any) {
    return this.prisma.userPJ.create({ data });
  }

  async getUserPJ(id: string) {
    return this.prisma.userPJ.findUnique({ where: { id } });
  }

  async getAllUserPF() {
    return this.prisma.userPF.findMany();
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
}
