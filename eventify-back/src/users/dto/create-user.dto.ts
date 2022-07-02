import { IsEmail, IsOptional, IsString, IsNotEmpty, IsBoolean, IsDateString, MaxLength } from "class-validator";
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(40, {
    message: 'username is too long',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(60, {
    message: 'password is too long',
  })
  password: string;

  @IsEmail()
  @MaxLength(100, {
    message: 'email is too long',
  })
  email: string;

  @IsOptional()
  @IsBoolean()
  willCome: boolean;

  @IsOptional()
  @IsDateString()
  confirmedOn: Date; // new Date().toISOString()
}
