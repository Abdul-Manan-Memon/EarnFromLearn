import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/Database/Entities/user.entity';
import { UserRepository } from 'src/Database/Repositories/user.repository';
import { CreateUserDto } from 'src/Dto/createUser.dto';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { SignInDto } from 'src/Dto/SingIn.dto';

@Injectable()
export class AuthService {
    constructor(private readonly User_Repo :  UserRepository) {}
    async SignUp(NewSignup: SignUpDto): Promise<void> {
        const { Username, Password, Role } = NewSignup;
        const NewRequest: CreateUserDto = {
            Username,
            Password,
            User_ID: Role,
        };
        try{
            await (this.User_Repo.CreateUser(NewRequest));
        }catch(error){
            if(error){
                //throw new ConflictException(`Username Alrady Exits`);
                console.log(error.code);
            }else{
                throw new InternalServerErrorException();
            }
        }  
//        return NewUser;     
    }
    async SignIn(UserLogin: SignInDto): Promise<User> {
        const User_ = this.User_Repo.ValidateUser(UserLogin);
        if(!User_){
            throw new UnauthorizedException("Invalid Credentials");
        }
        return User_;  
    }
}
