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
    async CreateUser(NewRequest: CreateUserDto ) : Promise<void> { 
        const { Username, Password} = NewRequest;
        const NewUser = new User(); 
        NewUser.Username = Username;
        NewUser.Password = Password;
        await this.User_Repository.save(NewUser);
    }

}