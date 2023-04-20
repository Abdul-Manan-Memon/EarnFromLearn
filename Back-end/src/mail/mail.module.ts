import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { Mail_Connection } from './mail_Config/mail.configuration';
import { JwtModule } from '@nestjs/jwt';
import { Token } from '../auth/JWT/jwt-Token';
import { PassportModule } from '@nestjs/passport';
@Global()
@Module({
  imports: [
    PassportModule.registerAsync({
      useFactory: async () => ({
        defaultStrategy: 'jwt',
      }),
    }),
    JwtModule.registerAsync(Token),
    MailerModule.forRootAsync(Mail_Connection),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
