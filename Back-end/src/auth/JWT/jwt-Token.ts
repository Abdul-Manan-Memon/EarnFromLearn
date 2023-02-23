import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';
export const Token: JwtModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
    secret: config.get('JWT_SECRET'),
    signOptions: {
      expiresIn: config.get('JWT_EXPIRESIN'),
    },
  }),
};
