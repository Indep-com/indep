import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateCandidatureDto {
  @IsString()
  @IsNotEmpty()
  user_id: string

  @IsString()
  @IsNotEmpty()
  mission_id: string

  @IsString()
  @IsOptional()
  lettre_motivation?: string
}
