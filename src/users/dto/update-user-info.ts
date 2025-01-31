import { IsNumber, IsOptional } from 'class-validator';

export class UpdateUserInfoDto {
  @IsNumber()
  @IsOptional()
  height: number;

  @IsNumber()
  @IsOptional()
  weight: number;

  @IsNumber()
  @IsOptional()
  bodyFat: number;

  @IsNumber()
  @IsOptional()
  goalWeight: number;

  @IsNumber()
  @IsOptional()
  goalBodyFat: number;
}
