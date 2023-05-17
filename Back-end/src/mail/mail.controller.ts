import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { MailService } from './mail.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/Decorators/get-user-decorator';
import { User } from 'src/Database/Entities/user.entity';

@Controller('mail')
@UseGuards(AuthGuard('jwt'))
export class MailController {
  constructor(
    @Inject(MailService)
    private Mail_Service: MailService,
  ) {}
}
