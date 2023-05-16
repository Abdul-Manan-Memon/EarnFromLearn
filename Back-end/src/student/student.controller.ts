import { Controller, Get, Inject, Param, Put } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { Student } from '../Database/Entities/student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(
    @Inject(StudentService)
    private Student_Service: StudentService,
  ) {}
  @Get('/:id')
  getStudentByID(@Param('id') id: ObjectID): Promise<Student> {
    return this.Student_Service.getStudentByID(id);
  }
  // @Put('/enrollCourse')
  // async enrollToCourse();
}
