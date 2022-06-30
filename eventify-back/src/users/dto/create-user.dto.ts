import { IsEmail, IsOptional, IsString, IsNotEmpty, IsBoolean, IsDateString } from "class-validator";
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsBoolean()
  willCome: boolean;

  @IsOptional()
  @IsDateString()
  confirmedOn: string;
}
