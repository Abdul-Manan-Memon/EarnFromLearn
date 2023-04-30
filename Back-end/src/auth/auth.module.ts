import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { Token } from './JWT/jwt-Token';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './JWT/jwt-strategy';
@Module({
  imports: [
    PassportModule.registerAsync({
      useFactory: async () => ({
        defaultStrategy: 'jwt',
      }),
    }),
    JwtModule.registerAsync(Token),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule, AuthService],
})
export class AuthModule {}
