import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    context;
    return true;
  }
}
