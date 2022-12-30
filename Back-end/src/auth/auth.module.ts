import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
//import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { Token } from './JWT/jwt-Token';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register(Token),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  // exports: [AuthService, UserRepository],
})
export class AuthModule {}
