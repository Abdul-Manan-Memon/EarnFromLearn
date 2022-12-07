import { Body, Controller, Get, Post, Redirect } from '@nestjs/common';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private auth_Service: AuthService){}
    @Post('/signup')
    @Redirect(``,200)
    SignUp(@Body() NewSignup : SignUpDto) {
        this.auth_Service.Signup(NewSignup);
        return {url: `${NewSignup.Role}/singup`} 
    }
    // @Get('/signin')
    // SignIn() 
}
