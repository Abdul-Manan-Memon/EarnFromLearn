import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterStudentDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  Name: string;
  @IsNotEmpty()
  Email: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  Phone_Number: string;
}
