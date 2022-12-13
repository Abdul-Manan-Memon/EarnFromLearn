import { Controller, Get, Param } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { Recruiter } from '../../src/Database/Entities/recruiter.entity';
import { RecruiterService } from './recruiter.service';

@Controller('recruiter')
export class RecruiterController {
  constructor(private Recruiter_Service: RecruiterService) {}
  @Get('/:id')
  getRecruiterByID(@Param('id') id: ObjectID): Promise<Recruiter> {
    return this.Recruiter_Service.getRecruiterByID(id);
  }
}
