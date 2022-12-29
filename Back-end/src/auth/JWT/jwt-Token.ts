import { JwtModuleOptions } from '@nestjs/jwt';

export const Token: JwtModuleOptions = {
  secret: 'EarnFromLearn',
  signOptions: {
    expiresIn: 3600,
  },
};
