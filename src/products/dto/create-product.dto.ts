
import { IsString , IsNumber,IsInt, IsPositive, IsOptional} from 'class-validator';
export class CreateProductDto {
  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsInt()
  @IsPositive()
  stock: number;

  @IsNumber()
  @IsPositive()
  price: number;

}
