import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/Database/Entities/user.entity';
import { SignInDto } from 'src/Dto/SingIn.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth_Service: AuthService) {}
  @Post('/signin')
  SignIn(@Body() UserLogin: SignInDto): Promise<User> {
    return this.auth_Service.SignIn(UserLogin);
  }
}
