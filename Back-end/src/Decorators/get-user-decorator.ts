import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from 'src/Database/Entities/user.entity';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    console.log(req);
    return req.user;
  },
);
