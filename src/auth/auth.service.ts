import {
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/Database/Entities/user.entity';
import { UserRepository } from 'src/Database/Repositories/user.repository';
import { CreateUserDto } from 'src/Dto/createUser.dto';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { SignInDto } from 'src/Dto/SingIn.dto';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly User_Repo: UserRepository,
    @Inject(forwardRef(() => StudentService))
    private readonly Student_Service: StudentService,
  ) {}
  async SignUp(NewSignup: SignUpDto): Promise<User> {
    const { Username, Password, Role } = NewSignup;
    const NewRequest: CreateUserDto = {
      Username,
      Password,
      User_ID: Role,
    };
    try {
      const NewUser = await this.User_Repo.CreateUser(NewRequest);
      return NewUser;
    } catch (error) {
      if (error) {
        //throw new ConflictException(`Username Alrady Exits`);
        console.log(error.code);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
  async SignIn(UserLogin: SignInDto): Promise<User> {
    const User_ = await this.User_Repo.ValidateUser(UserLogin);
    if (!User_) {
      throw new UnauthorizedException('Invalid Credentials');
    } else if (User_.User_ID === 'student') {
      this.Student_Service.getStudentByID(User_.User_ID);
    } else if (User_.User_ID === 'instructor') {
    } else if (User_.User_ID === 'recruiter') {
    }
    return User_;
  }
}
