import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

export class IsInstructor implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.switchToHttp().getRequest().user;
    if (user.Role != 'Instructor') {
      throw new UnauthorizedException(
        'Only Instructors are Allowed to Add Course',
      );
    }
    return true;
  }
}
