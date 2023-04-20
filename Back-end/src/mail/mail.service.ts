import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { user } from 'src/Database/Entities/abstract_class/user.class';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private Jwt_Service: JwtService,
  ) {}
  async SendVarificationEmail(user: user): Promise<string> {
    console.log('here');
    const token = this.Jwt_Service.sign(user.Email);
    console.log('here2');
    const url = `http://localhost:3000/auth/confirmation/${token}`;
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
