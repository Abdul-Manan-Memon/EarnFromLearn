import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from 'src/Dto/createJob.dto';
import { AuthGuard } from '@nestjs/passport';
import { IsRecruiter } from 'src/Guards/isRecruiter.guard';

@Controller('job')
@UseGuards(AuthGuard('jwt'))
export class JobController {
  constructor(
    @Inject(JobService)
    private Job_Service: JobService,
  ) {}
  @Post('/addJob')
  @UseGuards(IsRecruiter)
  async addJob(@Body() NewJob: CreateJobDto) {
    return await this.Job_Service.addJob(NewJob);
  }
}
