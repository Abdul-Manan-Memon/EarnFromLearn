import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SignUpDto } from '../Dto/SignUp.dto';
import { SignInDto } from '../Dto/SingIn.dto';
import { AuthService } from './auth.service';
import { ObjectID } from 'typeorm';
import { User } from 'src/Database/Entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private auth_Service: AuthService) {}
  @Post('/signup')
  Signup(@Body() NewSignup: SignUpDto) {
    return this.auth_Service.SignUp(NewSignup);
  }
  @Post('/signin')
  SignIn(@Body() UserLogin: SignInDto): Promise<{ access_token: string }> {
    return this.auth_Service.SignIn(UserLogin);
  }
  // @Get('/:id')
  // getUser(@Param('id') name: ObjectID): Promise<User> {
  //   return this.auth_Service.getUserByID(name);
  // }
}
