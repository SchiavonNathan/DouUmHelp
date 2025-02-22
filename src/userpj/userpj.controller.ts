import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { UserPJService } from './userpj.service';

@Controller('userpj')
export class UserPJController {
  constructor(private readonly userPJService: UserPJService) {}

  @Post()
  createUserPJ(@Body() data: any) {
    return this.userPJService.createUserPJ(data);
  }

  @Get(':id')
  getUserPJ(@Param('id') id: string) {
    return this.userPJService.getUserPJ(id);
  }

  @Delete(':id')
  deleteUserPJ(@Param('id') id: string) {
    return this.userPJService.deleteUserPJ(id);
  }
}
