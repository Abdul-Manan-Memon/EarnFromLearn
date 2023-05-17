import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { MongoRepository, ObjectID } from 'typeorm';
import { Student } from '../Entities/student.entity';
import { Course } from '../Entities/course.entity';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectRepository(Student)
    private Student_Repository: MongoRepository<Student>,
  ) {}
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
    console.log(
      await this.Student_Repository.updateOne(
        {
          User_ID: User_ID,
        },
        {
          $push: {
            Courses: Course,
          },
        },
      ),
    );
  }
}
