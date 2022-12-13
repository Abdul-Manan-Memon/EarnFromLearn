import { Controller, Get, Param } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { Instructor } from 'src/Database/Entities/instructor.entity';
import { InstructorService } from './instructor.service';

@Controller('instructor')
export class InstructorController {
  constructor(private Instructor_Service: InstructorService) {}
  @Get('/:id')
  getInstructorByID(@Param('id') id: ObjectID): Promise<Instructor> {
    return this.Instructor_Service.getInstructorByID(id);
  }
}
