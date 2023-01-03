import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { User } from 'src/Database/Entities/user.entity';
import { Payload } from './jwt-payload';
import { AuthService } from '../auth.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private Auth_Service: AuthService) {
    super({
      secretOrKey: 'EarnFromLearn',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: Payload): Promise<User> {
    const Username = payload.Username;
    const user = await this.Auth_Service.getUserByUsername(Username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
