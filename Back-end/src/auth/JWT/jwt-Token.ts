import { JwtModuleOptions } from '@nestjs/jwt';
export const Token: JwtModuleOptions = {
  secret: 'Hello',
  signOptions: {
    expiresIn: '1d',
  },
};
