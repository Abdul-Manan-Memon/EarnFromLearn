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
    return await this.Recruiter_Repository.findOne({
      where: { _ID: id },
    });
  }
  async CreateRecruiter(
    NewSignup?: SignUpDto,
    User_ID?: ObjectID,
  ): Promise<Recruiter> {
    return await new Recruiter(NewSignup, User_ID).save();
  }
}
