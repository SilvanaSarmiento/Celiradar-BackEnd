// create-receta.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRecetaDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  ingredientes: string;

  @IsString()
  @IsNotEmpty()
  pasos: string;
}
