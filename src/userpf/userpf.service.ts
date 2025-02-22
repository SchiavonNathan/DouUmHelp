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
        return this.prisma.userPF.findMany();  // Método para buscar todos os usuários PF
      }

    async deleteUserPF(id: string) {
        return this.prisma.userPF.delete({ where: { id }})
    }

    async findByEmail(email: string) {
        return this.prisma.userPF.findUnique({ where: { email } });
      }
    
    async findByUsername(username: string) {
        return this.prisma.userPF.findUnique({
            where: { email: username },  // Alternativa com email ou outro campo único
        });
    }    

    async findByCpf(cpf: string) {
    return this.prisma.userPF.findUnique({ where: { cpf } });
    }
}