import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { Mail_Connection } from './mail_Config/mail.configuration';
@Global()
@Module({
  imports: [MailerModule.forRootAsync(Mail_Connection)],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
