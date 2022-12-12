import {
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from 'src/Database/Repositories/user.repository';
import { CreateUserDto } from 'src/Dto/createUser.dto';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { SignInDto } from 'src/Dto/SingIn.dto';
import { Roles } from 'src/Enum/Roles.enum';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly User_Repo: UserRepository,
    private readonly Student_Service: StudentService,
  ) {}
  async SignUp(NewSignup: SignUpDto): Promise<void> {
    const { Username, Password, Role } = NewSignup;
    const NewRequest: CreateUserDto = {
      Username,
      Password,
      Role,
    };
    try {
      await this.User_Repo.CreateUser(NewRequest);
      const NewUser = await this.User_Repo.getUserIDByUsername(Username);
      if (NewUser.Role === Roles.Student) {
        this.Student_Service.Signup(NewSignup, NewUser.User_ID);
      } else if (NewUser.Role === Roles.Instructor) {
      } else if (NewUser.Role === Roles.Recruiter) {
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
    } else if (User_.Role === Roles.Recruiter) {
    }
  }
}
