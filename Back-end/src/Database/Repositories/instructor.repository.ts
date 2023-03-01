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
  async getInstructorByID(id: ObjectID): Promise<Instructor> {
    //console.log('Before findone In Repo');
    return await this.Instructor_Repository.findOne({
      where: { _ID: id },
    });
  }
  async CreateInstructor(
    NewSignup: SignUpDto,
    ID: ObjectID,
  ): Promise<Instructor> {
    const NewInstructor = new Instructor(NewSignup, ID);
    return await this.Instructor_Repository.save(NewInstructor);
  }
}
