import { Controller, Post, Get, Delete, Param, Body } from "@nestjs/common";
import { UserPFService } from "./userpf.service";

@Controller('userpf')
export class UserPFController {
    constructor(private readonly userPFService: UserPFService) {}

    @Post()
    createUserPF(@Body() data: any) {
        return this.userPFService.createUserPF(data);
    }

    @Get(':id')
    getUserPF(@Param('id') id: string) {
        return this.userPFService.getUserPF(id);
    }

    @Delete(':id')
    deleteUserPF(@Param('id') id: string) {
        return this.userPFService.deleteUserPF(id);
    }

    @Get()  // Endpoint para listar todos os usuários PF
    getAllUserPF() {
        return this.userPFService.getAllUserPF();
    }

}