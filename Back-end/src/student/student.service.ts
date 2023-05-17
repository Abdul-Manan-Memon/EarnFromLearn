import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Redirect,
} from '@nestjs/common';
import { SignUpDto } from '../Dto/SignUp.dto';
import { ObjectID } from 'typeorm';
import { Student } from '../Database/Entities/student.entity';
import { StudentRepository } from '../Database/Repositories/student.repository';
import { User } from 'src/Database/Entities/user.entity';
import { CourseService } from 'src/course/course.service';
import { Exception } from 'handlebars';

@Injectable()
export class StudentService {
  constructor(
    private readonly Student_Repository: StudentRepository,
    private readonly Course_Service: CourseService,
  ) {}
  async getStudentByID(id: ObjectID): Promise<Student> {
    const Student = await this.Student_Repository.getStudentByID(id);
    if (!Student) {
      throw new NotFoundException('Invalid Credentials');
    }
    return Student;
  }
  async Signup(NewSignup?: SignUpDto, User_ID?: ObjectID): Promise<Student> {
    const Student = await this.Student_Repository.CreateStudent(
      NewSignup,
      User_ID,
    );
    if (!Student) {
      throw new InternalServerErrorException(
        'Student Account Can Not Be Created',
      );
    }
    return Student;
  }
  async addCourse(Cart: any, student: User) {
    const { Course_Title } = Cart;
    const { User_ID } = student;
    try {
      const course = await this.Course_Service.getCourseByTitle(Course_Title);
      return this.Student_Repository.addCourse(course, User_ID);
    } catch (err) {
      throw new Exception(err);
    }
  }
}
