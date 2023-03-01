import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { user } from 'src/Database/Entities/abstract_class/user.class';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async SendVarificationEmail(user: user): Promise<string> {
    const url = `https://www.google.com/`;
    return await this.mailerService.sendMail({
      to: user.Email,
      subject: 'Account Varification',
      template: './confirmation_email',
      context: {
        name: `${user.First_Name} - ${user.Last_Name} `,
        url: `${url}`,
      },
    });
  }
}
