import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/Database/Entities/user.entity';
import { UserRepository } from 'src/Database/Repositories/user.repository';
import { CreateUserDto } from 'src/Dto/createUser.dto';
import { SignUpDto } from 'src/Dto/SignUp.dto';

@Injectable()
export class AuthService {
    constructor(private readonly User_Repo :  UserRepository) {}
    async Signup(NewSignup: SignUpDto): Promise<User>{
        const { Username, Password, Role} = NewSignup;
        const NewRequest: CreateUserDto = {
            Username,
            Password,
            User_ID: Role,
        };  
        const NewUser = await (this.User_Repo.CreateUser(NewRequest));
        if(!NewUser){
            throw new NotFoundException('Account Can Not Be Created');
        }       
        return NewUser;     
    }
    async Signin(): Promise<User> {
        
        return ;  
    }
}
