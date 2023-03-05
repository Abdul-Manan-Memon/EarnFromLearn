import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Payload } from 'src/auth/JWT/jwt-payload';
import { user } from 'src/Database/Entities/abstract_class/user.class';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private readonly Jwt_Service: JwtService,
  ) {}
  async SendVarificationEmail(user: user): Promise<string> {
    const token = await this.Jwt_Service.sign(user.Email);
    const url = `http://localhost:3000/auth/confirmation-email/token`;
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
