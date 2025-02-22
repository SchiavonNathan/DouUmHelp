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

  async deleteUserPJ(id: string) {
    return this.prisma.userPJ.delete({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.prisma.userPJ.findUnique({ where: { email } });
  }

  async findByUsername(username: string) {
        return this.prisma.userPJ.findUnique({
            where: { email: username },  // Alternativa com email ou outro campo único
        });
    }    

  async findByCnpj(cnpj: string) {
    return this.prisma.userPJ.findUnique({ where: { cnpj } });
  }
}
