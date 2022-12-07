import { Injectable, NotFoundException, Redirect, Res } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { UserRepository } from 'src/Database/Repositories/user.repository';
import { CreateUserDto } from 'src/Dto/createUser.dto';
import { SignUpDto } from 'src/Dto/SignUp.dto';

@Injectable()
export class AuthService {
    constructor(private readonly User_Repo :  UserRepository) {}
    async Signup(NewSignup: SignUpDto): Promise<void>{
        const { Username, Password} = NewSignup;
        const NewRequest: CreateUserDto = {
            Username,
            Password,
//          User_ID: randomUUID(),
        };  
        const NewUser = await this.User_Repo.CreateUser(NewRequest);        
      }
}
