import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/Dto/createUser.dto';
import { SignInDto } from 'src/Dto/SingIn.dto';
import { MongoRepository, ObjectID } from 'typeorm';
import { User } from '../Entities/user.entity';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private User_Repository: MongoRepository<User>,
  ) {}
  private async Generate_Hashed_Password(
    Password: string,
    salt: string,
  ): Promise<string> {
    return await bcrypt.hash(Password, salt);
  }
  async CreateUser(NewRequest: CreateUserDto): Promise<User> {
    const { Username, Password, Role } = NewRequest;
    const Salt = await bcrypt.genSalt();
    const Hashed_Password = await this.Generate_Hashed_Password(Password, Salt);
    const NewUser = new User(Username, Hashed_Password, Salt, Role);
    return await NewUser.save();
  }
  async ValidateUser(UserLogin: SignInDto): Promise<User> {
    const { Username, Password } = UserLogin;
    const user = await this.User_Repository.findOne({
      where: { Username: Username },
    });
    if (user && (await user.ValidatePassword(Password))) {
      return user;
    }
    return null;
  }
  async getUserByUsername(Username: string): Promise<User> {
    return await this.User_Repository.findOne({
      where: { Username: Username },
    });
  }
  async getUserByID(UID: ObjectID): Promise<User> {
    return await this.User_Repository.findOne({ where: { User_ID: UID } });
  }
  async UpdateUsertoVarified(email: string) {
    return await this.User_Repository.findOneAndUpdate(
      { Username: email },
      { $set: { verified: true } },
    );
  }
}
