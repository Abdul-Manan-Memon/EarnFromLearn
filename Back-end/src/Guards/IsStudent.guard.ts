import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

export class IsStudent implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.switchToHttp().getRequest().user;
    if (user.Role != 'Student') {
      throw new UnauthorizedException(
        'Only Students are Allowed To Enroll in a Course',
      );
    }
    return true;
  }
}
