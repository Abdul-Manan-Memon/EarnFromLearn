import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JobRepository } from 'src/Database/Repositories/job.repository';
import { CreateJobDto } from 'src/Dto/createJob.dto';

@Injectable()
export class JobService {
  constructor(private readonly Job_Repo: JobRepository) {}
  async addJob(NewJob: CreateJobDto) {
    const job = await this.Job_Repo.addJob(NewJob);
    if (!job) {
      throw new InternalServerErrorException(
        'Job Can not created...Failed To create',
      );
    }
    return job;
  }
}
