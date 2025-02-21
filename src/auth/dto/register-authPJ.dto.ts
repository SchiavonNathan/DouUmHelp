
import { IsEmail, IsNotEmpty, IsNumberString, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";


export class RegisterAuthPJDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    //mudar para @IsStrongPassword no futuro
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;


    @IsNumberString()
    @IsNotEmpty()
    cnpj: string;

    @IsPhoneNumber("BR")
    @IsNotEmpty()
    phone: string;

}
