import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { SignInDto } from 'src/Dto/SingIn.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './JWT/jwt-payload';
import { ObjectID } from 'typeorm';
import { User } from 'src/Database/Entities/user.entity';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService)
    private readonly User_Service: UserService,
    @Inject(JwtService)
    private jwtService: JwtService,
    @Inject(MailService)
    private readonly mail_Service: MailService,
  ) {}
  async SignUp(NewSignup: SignUpDto) {
    const _user = await this.User_Service.SignUp(NewSignup);
    if (_user) {
      await this.mail_Service.SendVarificationEmail(_user);
    }
    return '';
  }
  async SignIn(UserLogin: SignInDto): Promise<{ access_token: string }> {
    try {
      const user = await this.User_Service.SignIn(UserLogin);
      const { User_ID, Username, Role } = user;
      const Paylaod: Payload = { User_ID, Role, Username };
      const access_token = await this.jwtService.signAsync(Paylaod);
      return { access_token };
    } catch (error) {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }
  async getUserByUsername(Username: string): Promise<User> {
    return await this.User_Service.getUserByUsername(Username);
  }
  async getUserByID(UID: ObjectID): Promise<User> {
    return await this.User_Service.getUserByID(UID);
  }
  async validateAccountEmail(token: string) {
    const email = this.jwtService.decode(token);
    const updated = await this.User_Service.UpdateUserVarified(email['Email']);
    if (!updated) {
      throw new UnauthorizedException('Invalid Token');
    }
    return 'Account Sucessfully Verified';
  }
}
