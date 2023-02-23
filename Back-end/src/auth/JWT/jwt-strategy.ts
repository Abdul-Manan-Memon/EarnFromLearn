import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { User } from 'src/Database/Entities/user.entity';
import { AuthService } from '../auth.service';
import { Payload } from './jwt-payload';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private Auth_Service: AuthService,
    private readonly config: ConfigService,
  ) {
    super({
      secretOrKey: config.get('JWT_SECRET'),
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
