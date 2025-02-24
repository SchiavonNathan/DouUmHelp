import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { RegisterAuthPFDto } from "src/auth/dto/register-authPF.dto";
import * as bcrypt from 'bcrypt'


@Injectable()
export class UserPFService {
    constructor(private prisma: PrismaService) {}

    async createUserPF(data: RegisterAuthPFDto) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
    
        return this.prisma.userPF.create({
            data: {
                username: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                hashPassword: hashedPassword, 
                cpf: data.cpf,
                telephone: data.telephone,
            }
        });
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
    
    async updateUserPF(id: string, data: any) {
        return this.prisma.userPF.update({ where: { id }, data, });
    }
    
}