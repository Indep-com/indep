import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {IsString, IsEmail, IsEnum, IsOptional} from 'class-validator';
import {Role} from "../../enums/role.enum";

export class CreateUtilisateurDto {
  @ApiProperty({
    example: 'email@example.com',
    description: 'email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'password',
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: 'name',
    description: 'name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'visiteur',
    description: 'visiteur',
  })
  @ApiPropertyOptional({ enum: Role, default: Role.VISITEUR })
  @IsEnum(Role)
  @IsOptional()
  role?: Role;
}
