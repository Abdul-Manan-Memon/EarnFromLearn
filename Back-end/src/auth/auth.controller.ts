import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
} from '@nestjs/common';
import { response } from 'express';
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
  SignIn(@Body() UserLogin: SignInDto): Promise<{ access_token: string }> {
    return this.auth_Service.SignIn(UserLogin);
  }
  @Get('/confirmation/:token')
  async ConfirmAccount(@Param('token') token: string) {
    try {
      await this.auth_Service.validateAccountEmail(token);
      response.send('Account Sucessfully Verified');
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  // @Get('/:id')
  // getUser(@Param('id') name: ObjectID): Promise<User> {
  //   return this.auth_Service.getUserByID(name);
  // }
}
