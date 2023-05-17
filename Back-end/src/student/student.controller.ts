import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { Student } from '../Database/Entities/student.entity';
import { StudentService } from './student.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/Decorators/get-user-decorator';
import { IsStudent } from 'src/Guards/IsStudent.guard';
import { User } from 'src/Database/Entities/user.entity';

@Controller('student')
@UseGuards(AuthGuard('jwt'))
export class StudentController {
  constructor(
    @Inject(StudentService)
    private Student_Service: StudentService,
  ) {}
  @Get()
  async getAllStudents(): Promise<Student[]> {
    return await this.Student_Service.getAllStudents();
  }
  @Get('/:id')
  async getStudentByID(@Param('id') id: ObjectID): Promise<Student> {
    return await this.Student_Service.getStudentByID(id);
  }
  @Put('/enrollCourse')
  @UseGuards(IsStudent)
  async enrollToCourse(@Body() Cart: any, @GetUser() student: User) {
    return await this.Student_Service.addCourse(Cart, student);
  }
}
