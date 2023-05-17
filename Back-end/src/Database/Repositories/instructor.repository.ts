import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { MongoRepository, ObjectID } from 'typeorm';
import { Instructor } from '../Entities/instructor.entity';
import { Course } from '../Entities/course.entity';
import { Exception } from 'handlebars';

@Injectable()
export class InstructorRepository {
  constructor(
    @InjectRepository(Instructor)
    private Instructor_Repository: MongoRepository<Instructor>,
  ) {}
  async addCourse(User_ID: ObjectID, Course: Course) {
    await this.Instructor_Repository.updateOne(
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
  async getAllInstructors(): Promise<Instructor[]> {
    try {
      return this.Instructor_Repository.find();
    } catch (err) {
      throw new Exception(err);
    }
  }
  async getInstructorByUsername(Username: string) {
    return await this.Instructor_Repository.findOne({
      where: { Email: Username },
    });
  }
  async getInstructorByUserID(user_id: ObjectID): Promise<Instructor> {
    return await this.Instructor_Repository.findOne({
      where: { User_ID: user_id },
    });
  }
  async getInstructorByID(id: ObjectID): Promise<Instructor> {
    return await this.Instructor_Repository.findOne({
      where: { _ID: id },
    });
  }
  async CreateInstructor(
    NewSignup?: SignUpDto,
    User_ID?: ObjectID,
  ): Promise<Instructor> {
    return await new Instructor(NewSignup, User_ID).save();
  }
}
