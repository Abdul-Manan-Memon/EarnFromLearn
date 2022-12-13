import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recruiter } from '../../src/Database/Entities/recruiter.entity';
import { RecruiterRepository } from '../../src/Database/Repositories/recruiter.repository';
import { RecruiterController } from './recruiter.controller';
import { RecruiterService } from './recruiter.service';

@Module({
  imports: [TypeOrmModule.forFeature([Recruiter])],
  controllers: [RecruiterController],
  providers: [RecruiterRepository, RecruiterService],
  exports: [RecruiterService],
})
export class RecruiterModule {}
