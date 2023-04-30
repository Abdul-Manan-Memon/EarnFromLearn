import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { JOB } from '../Entities/job.entity';
import { CreateJobDto } from 'src/Dto/createJob.dto';

@Injectable()
export class JobRepository {
  constructor(
    @InjectRepository(JOB)
    private readonly Job_Repository: MongoRepository<JOB>,
  ) {}
  async addJob(NewJob: CreateJobDto) {
    return await new JOB(NewJob).save();
  }
}
