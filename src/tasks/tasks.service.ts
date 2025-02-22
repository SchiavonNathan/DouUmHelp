import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: any) {
    return this.prisma.task.create({ data });
  }

  async getTask(id: string) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async updateTask(id: string, data: any) {
    return this.prisma.task.update({ where: { id }, data });
  }

  async deleteTask(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}
