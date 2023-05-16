import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

export class IsRecruiter implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.switchToHttp().getRequest().user;
    if (user.Role != 'Recruiter') {
      throw new UnauthorizedException(
        'Only Recruiters are Allowed to Add a JOB',
      );
    }
    return true;
  }
}
