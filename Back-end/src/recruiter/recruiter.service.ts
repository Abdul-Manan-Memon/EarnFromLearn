import { Injectable, NotFoundException } from '@nestjs/common';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { ObjectID } from 'typeorm';
import { Recruiter } from '../../src/Database/Entities/recruiter.entity';
import { RecruiterRepository } from '../../src/Database/Repositories/recruiter.repository';

@Injectable()
export class RecruiterService {
  constructor(private readonly Recruiter_Repository: RecruiterRepository) {}
  async getRecruiterByID(id: ObjectID): Promise<Recruiter> {
    const Recruiter = await this.Recruiter_Repository.getRecruiterByID(id);
    if (!Recruiter) {
      throw new NotFoundException('Recruiter ID Not Found');
    }
    return Recruiter;
  }
  async Signup(NewSignup: SignUpDto, ID: ObjectID): Promise<Recruiter> {
    const Recruiter = await this.Recruiter_Repository.CreateRecruiter(
      NewSignup,
      ID,
    );
    if (!Recruiter) {
      throw new NotFoundException('Recruiter Account Can Not Be Created');
    }
    return Recruiter;
  }
}
