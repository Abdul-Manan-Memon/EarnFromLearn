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
      where: { Instructor_ID: id },
    });
  }
  async CreateInstructor(
    NewSignup: SignUpDto,
    ID: ObjectID,
  ): Promise<Instructor> {
    const NewInstructor = new Instructor();
    const { First_Name, Last_Name, Username } = NewSignup;
    NewInstructor.Instructor_ID = ID;
    NewInstructor.First_Name = First_Name;
    NewInstructor.Last_Name = Last_Name;
    NewInstructor.Email = Username;
    await this.Instructor_Repository.save(NewInstructor);
    return NewInstructor;
  }
}
