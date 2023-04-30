import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { MongoRepository, ObjectID } from 'typeorm';
import { Instructor } from '../Entities/instructor.entity';

@Injectable()
export class InstructorRepository {
  constructor(
    @InjectRepository(Instructor)
    private Instructor_Repository: MongoRepository<Instructor>,
  ) {}
  async getInstructorByUserID(user_id: ObjectID) {
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
