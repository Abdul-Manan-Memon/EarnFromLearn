import { Controller, Get, Param } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { Student } from '../../src/Database/Entities/student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private Student_Service: StudentService) {}
  @Get('/:id')
  getStudentByID(@Param('id') id: ObjectID): Promise<Student> {
    return this.Student_Service.getStudentByID(id);
  }
}
