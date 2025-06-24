import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateCandidatureDto {
  @IsString()
  @IsNotEmpty()
  mission_id: string

  @IsString()
  @IsNotEmpty()
  user_id: string

  @IsString()
  @IsOptional()
  lettre_motivation?: string
}