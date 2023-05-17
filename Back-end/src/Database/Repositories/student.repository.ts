import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { MongoRepository, ObjectID } from 'typeorm';
import { Student } from '../Entities/student.entity';
import { Course } from '../Entities/course.entity';
import { Exception } from 'handlebars';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectRepository(Student)
    private Student_Repository: MongoRepository<Student>,
  ) {}
  async getAllStudents(): Promise<Student[]> {
    try {
      return this.Student_Repository.find();
    } catch (err) {
      throw new Exception(err);
    }
  }
  async getStudentByID(id?: ObjectID): Promise<Student> {
    return await this.Student_Repository.findOne({
      where: { _ID: id },
    });
  }
  async CreateStudent(
    NewSignup?: SignUpDto,
    User_ID?: ObjectID,
  ): Promise<Student> {
    return await new Student(NewSignup, User_ID).save();
  }
  async addCourse(Course: Course, User_ID: ObjectID) {
    await this.Student_Repository.updateOne(
      {
        User_ID: User_ID,
      },
      {
        $push: {
          Courses: Course,
        },
      },
    );
  }
}
