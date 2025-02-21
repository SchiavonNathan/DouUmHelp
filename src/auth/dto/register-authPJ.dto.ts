import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, MinLength, Validate } from "class-validator";
import { CnpjValidator } from "src/common/validators/cpf-cnpj.validator";


export class RegisterAuthPJDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    //Mudar para @IsStrongPassword no futuro
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @Validate(CnpjValidator)
    cnpj: string;

    @IsPhoneNumber("BR")
    @IsNotEmpty()
    phone: string;

}
