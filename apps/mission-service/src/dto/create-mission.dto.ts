import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMissionDto {
  @IsOptional()
  @IsString()
  user_id?: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsString()
  status?: string;
}
