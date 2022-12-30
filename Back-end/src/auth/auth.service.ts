import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { SignInDto } from 'src/Dto/SingIn.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Paylaod } from './JWT/jwt-payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly User_Service: UserService,
    private jwtService: JwtService,
  ) {}
  async SignUp(NewSignup: SignUpDto) {
    return await this.User_Service.SignUp(NewSignup);
  }
  async SignIn(UserLogin: SignInDto): Promise<{ access_token: string }> {
    try {
      const user = await this.User_Service.SignIn(UserLogin);
      const { User_ID, Role } = user;
      const Paylaod: Paylaod = { User_ID, Role };
      const access_token = await this.jwtService.sign(Paylaod);
      return { access_token };
    } catch (error) {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }
}
