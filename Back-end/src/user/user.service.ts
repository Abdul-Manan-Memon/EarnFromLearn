import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from 'src/Database/Repositories/user.repository';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { SignInDto } from 'src/Dto/SingIn.dto';
import { CreateUserDto } from 'src/Dto/createUser.dto';
import { Roles } from 'src/Enum/Roles.enum';
import { InstructorService } from 'src/instructor/instructor.service';
import { RecruiterService } from 'src/recruiter/recruiter.service';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class UserService {
  constructor(
    private readonly User_Repo: UserRepository,
    private readonly Student_Service: StudentService,
    private readonly Recruiter_Service: RecruiterService,
    private readonly Instructor_Service: InstructorService,
  ) {}
  async SignUp(NewSignup: SignUpDto) {
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
        await this.Student_Service.Signup(NewSignup, NewUser.User_ID);
      } else if (NewUser.Role === Roles.Instructor) {
        await this.Instructor_Service.Signup(NewSignup, NewUser.User_ID);
      } else if (NewUser.Role === Roles.Recruiter) {
        await this.Recruiter_Service.Signup(NewSignup, NewUser.User_ID);
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
}
