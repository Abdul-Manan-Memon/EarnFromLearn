import { Controller, Get } from '@nestjs/common';
import { User } from 'src/Database/Entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private auth_Service: AuthService){}
    @Get('/signin')
    SignIn() : Promise<User>{
      return this.auth_Service.SignIn();  
    }    

}
