import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/Dto/createUser.dto';
import { SignInDto } from 'src/Dto/SingIn.dto';
import { MongoRepository } from 'typeorm';
import { User } from '../Entities/user.entity';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private User_Repository: MongoRepository<User>,
  ) {}
  private async Hashing(Password: string, salt: string): Promise<string> {
    return bcrypt.hash(Password, salt);
  }
  async CreateUser(NewRequest: CreateUserDto): Promise<void> {
    const { Username, Password, Role } = NewRequest;
    const NewUser = new User();
    NewUser.Username = Username;
    NewUser.Salt = await bcrypt.genSalt();
    NewUser.Password = await this.Hashing(Password, NewUser.Salt);
    NewUser.Role = Role;
    await this.User_Repository.save(NewUser);
  }
  async ValidateUser(UserLogin: SignInDto): Promise<User> {
    const { Username, Password } = UserLogin;
    const user = await this.User_Repository.findOne({
      where: { Username: Username },
    });
    if (user && user.ValidatePassword(Password)) {
      return user;
    }
  }
  async getUserByUsername(Username: string): Promise<User> {
    return await this.User_Repository.findOne({
      where: { Username: Username },
    });
  }
}
