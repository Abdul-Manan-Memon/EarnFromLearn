import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JOB } from 'src/Database/Entities/job.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([JOB])],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
