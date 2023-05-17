import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { Instructor } from '../Database/Entities/instructor.entity';
import { InstructorService } from './instructor.service';

@Controller('instructor')
export class InstructorController {
  constructor(
    @Inject(InstructorService)
    private Instructor_Service: InstructorService,
  ) {}
  @Get()
  async getAllInstructors(): Promise<Instructor[]> {
    return await this.Instructor_Service.getAllInstructors();
  }
  @Get('/:username')
  getInstructorByUsername(
    @Param('username') Username: string,
  ): Promise<Instructor> {
    return this.Instructor_Service.getInstructorByUsername(Username);
  }
}
