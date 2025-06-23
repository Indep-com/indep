import {IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString} from "class-validator";
import {Role} from "../enums/role.enum";

export class RegisterDto {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    name: string;

    @IsEnum(Role)
    @IsOptional()
    role?: Role;
}
