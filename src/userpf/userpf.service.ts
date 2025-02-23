import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class UserPFService {
    constructor(private prisma: PrismaService) {}

    async createUserPF(data: any) {
        return this.prisma.userPF.create({ data })
    }

    async getUserPF(id: string) {
        return this.prisma.userPF.findUnique({ where: { id }});
    }

    async getAllUserPF() {
        return this.prisma.userPF.findMany();
      }

    async deleteUserPF(id: string) {
        return this.prisma.userPF.delete({ where: { id }})
    }

    async findByEmail(email: string) {
        return this.prisma.userPF.findUnique({ where: { email } });
      }
    
    async findByUsername(username: string) {
    return this.prisma.userPF.findUnique({ where: { username } });
    }

    async findByCpf(cpf: string) {
    return this.prisma.userPF.findUnique({ where: { cpf } });
    }
}