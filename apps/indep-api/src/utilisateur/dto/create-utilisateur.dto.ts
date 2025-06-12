import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

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
    example: 'role',
    description: 'role',
  })
  @IsString()
  role: string;
}
