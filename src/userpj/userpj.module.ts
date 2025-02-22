import { Module } from "@nestjs/common";
import { UserPJService } from "./userpj.service";
import { UserPJController } from "./userpj.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    imports: [],
    controllers: [UserPJController],
    providers: [UserPJService, PrismaService],
    exports: [UserPJService]
})
export class UserPJModule {}