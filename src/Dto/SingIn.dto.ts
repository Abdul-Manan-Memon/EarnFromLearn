import { Matches, MinLength } from 'class-validator';

export class SignInDto {
  Username: string;
  @MinLength(8)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: `Password Too Weak`,
  })
  Password: string;
}
