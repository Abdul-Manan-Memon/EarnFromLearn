import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from '../Database/Repositories/user.repository';
import { CreateUserDto } from '../Dto/createUser.dto';
import { SignUpDto } from '../Dto/SignUp.dto';
import { SignInDto } from '../Dto/SingIn.dto';
import { Roles } from '../Enum/Roles.enum';
import { InstructorService } from '../instructor/instructor.service';
import { RecruiterService } from '../recruiter/recruiter.service';
import { StudentService } from '../student/student.service';

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
