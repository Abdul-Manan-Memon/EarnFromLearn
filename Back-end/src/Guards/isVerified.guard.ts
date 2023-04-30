import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class IsVerified implements CanActivate {
  constructor(
    @Inject(UserService) private readonly User_Service: UserService,
  ) {}
  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const email = req.body['Username'];
    const user = await this.User_Service.getUserByUsername(email);
    if (!user.verified) {
      throw new UnauthorizedException('Account Not Verified');
    }
    return true;
  }
}
