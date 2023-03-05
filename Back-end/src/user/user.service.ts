import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/Database/Entities/user.entity';
import { UserRepository } from 'src/Database/Repositories/user.repository';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { SignInDto } from 'src/Dto/SingIn.dto';
import { CreateUserDto } from 'src/Dto/createUser.dto';
import { Roles } from 'src/Enum/Roles.enum';
import { InstructorService } from 'src/instructor/instructor.service';
import { RecruiterService } from 'src/recruiter/recruiter.service';
import { StudentService } from 'src/student/student.service';
import { ObjectID } from 'typeorm';
import { user } from 'src/Database/Entities/abstract_class/user.class';

@Injectable()
export class UserService {
  constructor(
    private readonly User_Repo: UserRepository,
    @Inject(StudentService)
    private readonly Student_Service: StudentService,
    @Inject(RecruiterService)
    private readonly Recruiter_Service: RecruiterService,
    @Inject(InstructorService)
    private readonly Instructor_Service: InstructorService,
  ) {}
  async SignUp(NewSignup: SignUpDto): Promise<user> {
    const { Username, Password, Role } = NewSignup;
    const NewRequest: CreateUserDto = {
      Username,
      Password,
      Role,
    };
    try {
      await this.User_Repo.CreateUser(NewRequest);
      const NewUser = await this.User_Repo.getUserByUsername(Username);
      if (NewUser.Role === Roles.Student) {
        return this.Student_Service.Signup(NewSignup, NewUser.User_ID);
      } else if (NewUser.Role === Roles.Instructor) {
        return this.Instructor_Service.Signup(NewSignup, NewUser.User_ID);
      } else if (NewUser.Role === Roles.Recruiter) {
        return this.Recruiter_Service.Signup(NewSignup, NewUser.User_ID);
      }
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException(`Username Alrady Exits`);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
  async SignIn(UserLogin: SignInDto) {
    return await this.User_Repo.ValidateUser(UserLogin);
  }
  async getUserByUsername(Username: string): Promise<User> {
    const user = await this.User_Repo.getUserByUsername(Username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
  async getUserByID(UID: ObjectID): Promise<User> {
    const user = await this.User_Repo.getUserByID(UID);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
  async UpdateUserVarified(email: any) {
    return await this.User_Repo.UpdateUsertoVarified(email);
  }
}
