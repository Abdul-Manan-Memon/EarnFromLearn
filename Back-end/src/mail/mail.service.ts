import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { user } from 'src/Database/Entities/abstract_class/user.class';

@Injectable()
export class MailService {
  constructor(
    @Inject(MailerService)
    private mailerService: MailerService,
    @Inject(JwtService)
    private Jwt_Service: JwtService,
    @Inject(ConfigService)
    private readonly config: ConfigService,
  ) {}
  async SendVarificationEmail(user: user): Promise<string> {
    const { Email } = user;
    const token = await this.Jwt_Service.signAsync({ Email });
    const url = `http://${this.config.getOrThrow(
      'SERVER',
    )}:${this.config.getOrThrow('SERVER_PORT')}/auth/confirmation/${token}`;
    return await this.mailerService.sendMail({
      to: Email,
      subject: 'Account Varification',
      template: './confirmation_email',
      context: {
        name: `${user.First_Name} - ${user.Last_Name} `,
        url: `${url}`,
      },
    });
  }
}
