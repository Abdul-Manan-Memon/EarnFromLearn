import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from 'src/Database/Repositories/user.repository';
import { CreateUserDto } from 'src/Dto/createUser.dto';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { SignInDto } from 'src/Dto/SingIn.dto';
import { Roles } from 'src/Enum/Roles.enum';
import { InstructorService } from 'src/instructor/instructor.service';
import { RecruiterService } from 'src/recruiter/recruiter.service';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class AuthService {
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
        return this.Student_Service.Signup(NewSignup, NewUser.User_ID);
      } else if (NewUser.Role === Roles.Instructor) {
        return this.Instructor_Service.Signup(NewSignup, NewUser.User_ID);
      } else if (NewUser.Role === Roles.Recruiter) {
        return this.Recruiter_Service.Signup(NewSignup, NewUser.User_ID);
      }
    } catch (error) {
      if (error) {
        //throw new ConflictException(`Username Alrady Exits`);
        console.log(error.code);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
  async SignIn(UserLogin: SignInDto) {
    const User_ = await this.User_Repo.ValidateUser(UserLogin);
    if (!User_) {
      throw new UnauthorizedException('Invalid Credentials');
    } else if (User_.Role === Roles.Student) {
      return this.Student_Service.getStudentByID(User_.User_ID);
    } else if (User_.Role === Roles.Instructor) {
      return this.Instructor_Service.getInstructorByID(User_.User_ID);
    } else if (User_.Role === Roles.Recruiter) {
      return this.Recruiter_Service.getRecruiterByID(User_.User_ID);
    }
  }
}
