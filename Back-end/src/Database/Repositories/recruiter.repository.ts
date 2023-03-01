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
      where: { _ID: id },
    });
  }
  async CreateRecruiter(
    NewSignup: SignUpDto,
    ID: ObjectID,
  ): Promise<Recruiter> {
    const NewRecruiter = new Recruiter(NewSignup, ID);
    return await this.Recruiter_Repository.save(NewRecruiter);
  }
}
