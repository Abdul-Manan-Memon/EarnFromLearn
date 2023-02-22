import { MailerAsyncOptions } from "@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface";
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
export const Connection: MailerAsyncOptions = {
    useFactory: () => ({
        transport: 'smtps://user@domain.com:pass@smtp.domain.com',
        defaults: {
            from: '"nest-modules" <modules@nestjs.com>',
        },
        template: {
            dir: __dirname + './templates',
            adapter: new HandlebarsAdapter(),
            options: {
            strict: true,
            },
        },
    })
}