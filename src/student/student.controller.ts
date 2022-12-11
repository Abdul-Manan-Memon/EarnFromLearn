import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { ObjectID } from 'typeorm';
import { Student } from '../Database/Entities/student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private Student_Service: StudentService) {}
  @Get('/:id')
  getStudentByID(@Param('id') id: ObjectID): Promise<Student> {
    return this.Student_Service.getStudentByID(id);
  }
  // @Post('/signup')
  // Signup(@Body() NewSignup: SignUpDto): Promise<Student> {
  //   return this.Student_Service.Signup(NewSignup);
  // }
}
