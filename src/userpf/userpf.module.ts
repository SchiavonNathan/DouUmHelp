import { Module } from "@nestjs/common";
import { UserPFService } from "./userpf.service";
import { UserPFController } from "./userpf.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    imports: [],
    controllers: [UserPFController],
    providers: [UserPFService, PrismaService],
    exports: [UserPFService]
})
export class UserPFModule {}