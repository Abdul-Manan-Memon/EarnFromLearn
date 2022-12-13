import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { MongoRepository, ObjectID } from 'typeorm';
import { Recruiter } from '../Entities/recruiter.entity';

@Injectable()
export class RecruiterRepository {
  constructor(
    @InjectRepository(Recruiter)
    private Recruiter_Repository: MongoRepository<Recruiter>,
  ) {}
  async getRecruiterByID(id: ObjectID): Promise<Recruiter> {
    //console.log('Before findone In Repo');
    return await this.Recruiter_Repository.findOne({
      where: { Recruiter_ID: id },
    });
  }
  async CreateRecruiter(
    NewSignup: SignUpDto,
    ID: ObjectID,
  ): Promise<Recruiter> {
    const NewRecruiter = new Recruiter();
    const { First_Name, Last_Name, Username } = NewSignup;
    NewRecruiter.Recruiter_ID = ID;
    NewRecruiter.First_Name = First_Name;
    NewRecruiter.Last_Name = Last_Name;
    NewRecruiter.Email = Username;
    await this.Recruiter_Repository.save(NewRecruiter);
    return NewRecruiter;
  }
}
