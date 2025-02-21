import { IsEmail, IsNotEmpty, IsNumberString, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";


export class RegisterAuthPFDto {

    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsNumberString()
    cpf: string;

    @IsNumberString()
    cnpj: string;

    //mudar para @IsStrongPassword no futuro
    @IsString()
    @IsNotEmpty()
    password: string;

}
