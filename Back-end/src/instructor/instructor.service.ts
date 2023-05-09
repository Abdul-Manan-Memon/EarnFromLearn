import { Injectable, NotFoundException } from '@nestjs/common';
import { SignUpDto } from '../Dto/SignUp.dto';
import { ObjectID } from 'typeorm';
import { Instructor } from '../Database/Entities/instructor.entity';
import { InstructorRepository } from '../Database/Repositories/instructor.repository';
import { user } from 'src/Database/Entities/abstract_class/user.class';
import { Course } from 'src/Database/Entities/course.entity';

@Injectable()
export class InstructorService {
  constructor(private readonly Instructor_Repository: InstructorRepository) {}
  async getgetInstructorByUserID(user_id: ObjectID): Promise<Instructor> {
    const Instructor = await this.Instructor_Repository.getInstructorByUserID(
      user_id,
    );
    if (!Instructor) {
      throw new NotFoundException('Instructor ID Not Found');
    }
    return Instructor;
  }
  async getInstructorBy_ID(id: ObjectID): Promise<Instructor> {
    const Instructor = await this.Instructor_Repository.getInstructorByID(id);
    if (!Instructor) {
      throw new NotFoundException('Instructor ID Not Found');
    }
    return Instructor;
  }
  async Signup(NewSignup: SignUpDto, ID: ObjectID): Promise<Instructor> {
    const Instructor = await this.Instructor_Repository.CreateInstructor(
      NewSignup,
      ID,
    );
    if (!Instructor) {
      throw new NotFoundException('Instructor Account Can Not Be Created');
    }
    return Instructor;
  }
  async addCourse(User_ID: ObjectID, Course_ID: ObjectID) {
    try {
      await this.Instructor_Repository.addCourse(User_ID, Course_ID.toString());
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
