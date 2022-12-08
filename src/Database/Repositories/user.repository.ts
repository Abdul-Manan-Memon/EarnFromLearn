import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/Dto/createUser.dto";
import { MongoRepository } from "typeorm";
import { User } from "../Entities/user.entity";

@Injectable()
export class UserRepository{
    constructor(
        @InjectRepository(User)
        private User_Repository : MongoRepository<User>, 
    ) {}
    async CreateUser(NewRequest: CreateUserDto ) : Promise<User> { 
        const { User_ID, Username, Password} = NewRequest;
        const NewUser = new User(); 
        NewUser.User_ID = User_ID;
        NewUser.Username = Username;
        NewUser.Password = Password;
        await this.User_Repository.save(NewUser);
        return NewUser;
    }
}