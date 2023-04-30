import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from 'src/Dto/createJob.dto';

@Controller('job')
export class JobController {
  constructor(
    @Inject(JobService)
    private Job_Service: JobService,
  ) {}
  @Post('/addJob')
  async addJob(@Body() NewJob: CreateJobDto) {
    return await this.Job_Service.addJob(NewJob);
  }
}
