import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from '../Dto/SignUp.dto';
import { SignInDto } from '../Dto/SingIn.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth_Service: AuthService) {}
  @Post('/signup')
  Signup(@Body() NewSignup: SignUpDto) {
    return this.auth_Service.SignUp(NewSignup);
  }
  @Post('/signin')
  SignIn(@Body() UserLogin: SignInDto) {
    return this.auth_Service.SignIn(UserLogin);
  }
}
