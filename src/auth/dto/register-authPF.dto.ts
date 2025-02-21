import { IsEmail, IsNotEmpty, IsNumberString, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";


export class RegisterAuthPFDto {

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
    cpf: string;

    @IsPhoneNumber("BR")
    @IsNotEmpty()
    phone: string;

}
