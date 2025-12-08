import { IsString, IsOptional } from 'class-validator';

export class UpdateRecetaDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  categoria?: string;

  @IsOptional()
  @IsString()
  ingredientes?: string;

  @IsOptional()
  @IsString()
  pasos?: string;
}
