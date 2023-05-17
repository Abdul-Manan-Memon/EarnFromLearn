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
import { User } from 'src/Database/Entities/user.entity';
import { GetUser } from 'src/Decorators/get-user-decorator';
import { AuthGuard } from '@nestjs/passport';

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
  @Post('/sendMail/:To')
  @UseGuards(AuthGuard())
  async sendMeetingMail(
    @Param('To') To: string,
    @GetUser() Sender: User,
  ): Promise<any> {
    return await this.auth_Service.SendMeetingMail(To, Sender);
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
