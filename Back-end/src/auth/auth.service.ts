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
//import { JwtService } from '@nestjs/jwt';
//import { Paylaod } from './JWT/jwt-payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly User_Repo: UserRepository,
    private readonly Student_Service: StudentService,
    private readonly Recruiter_Service: RecruiterService,
    private readonly Instructor_Service: InstructorService, //    private readonly jwtService: JwtService,
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
        return await this.Student_Service.Signup(NewSignup, NewUser.User_ID);
      } else if (NewUser.Role === Roles.Instructor) {
        return await this.Instructor_Service.Signup(NewSignup, NewUser.User_ID);
      } else if (NewUser.Role === Roles.Recruiter) {
        return await this.Recruiter_Service.Signup(NewSignup, NewUser.User_ID);
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
    const user = await this.User_Repo.ValidateUser(UserLogin);
    if (!user) {
      throw new UnauthorizedException('Invalid Credentials');
    } else {
      //const { User_ID, Role } = user;
      //      const Paylaod: Paylaod = { User_ID, Role };
      //      const access_token = await this.jwtService.sign(Paylaod);
      if (user.Role === Roles.Student) {
        const student = await this.Student_Service.getStudentByID(user.User_ID);
        return { /*access_token*/ student };
      } else if (user.Role === Roles.Instructor) {
        const instructor = await this.Instructor_Service.getInstructorByID(
          user.User_ID,
        );
        return { /*access_token*/ instructor };
      } else if (user.Role === Roles.Recruiter) {
        const recruiter = await this.Recruiter_Service.getRecruiterByID(
          user.User_ID,
        );
        return { /*access_token*/ recruiter };
      }
    }
  }
}
