import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SignUpDto } from '../Dto/SignUp.dto';
import { SignInDto } from '../Dto/SingIn.dto';
import { AuthService } from './auth.service';
import { IsVerified } from 'src/Guards/isVerified.guard';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AuthService)
    private auth_Service: AuthService,
  ) {}
  @Post('/signup')
  Signup(@Body() NewSignup: SignUpDto) {
    return this.auth_Service.SignUp(NewSignup);
  }
  @Post('/signin')
  @UseGuards(IsVerified)
  SignIn(@Body() UserLogin: SignInDto): Promise<{ access_token: string }> {
    return this.auth_Service.SignIn(UserLogin);
  }
  @Get('/confirmation/:token')
  async ConfirmAccount(@Param('token') token: string) {
    return await this.auth_Service.validateAccountEmail(token);
  }
  // @Get('/:id')
  // getUser(@Param('id') name: ObjectID): Promise<User> {
  //   return this.auth_Service.getUserByID(name);
  // }
}
