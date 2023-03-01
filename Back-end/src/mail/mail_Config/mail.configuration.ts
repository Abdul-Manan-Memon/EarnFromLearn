import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule, ConfigService } from '@nestjs/config';
export const Mail_Connection: MailerAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
    transport: {
      service: 'gmail',
      host: config.get('MAIL_HOST_SERVER'),
      port: 465,
      secure: true,
      auth: {
        user: config.get('MAIL_USER'),
        pass: config.get('MAIL_PASS'),
      },
    },
    defaults: {
      from: config.get('FROM_ADDRESS'),
    },
    template: {
      dir: 'src/mail/templates',
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }),
};
