import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { SignInDto } from 'src/Dto/SingIn.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './JWT/jwt-payload';
import { ObjectID } from 'typeorm';
import { User } from 'src/Database/Entities/user.entity';

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
      const { User_ID, Username, Role } = user;
      const Paylaod: Payload = { User_ID, Role, Username };
      const access_token = await this.jwtService.sign(Paylaod);
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
}
