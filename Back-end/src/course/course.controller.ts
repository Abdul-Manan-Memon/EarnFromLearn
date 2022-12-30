import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CourseService } from './course.service';
import { NewCourse } from 'src/Dto/createCourse.dto';
import { Course } from 'src/Database/Entities/course.entity';

@Controller('course')
// @UseGuards()
export class CourseController {
  constructor(private Course_Service: CourseService) {}
  @Post('/addCourse')
  addCourse(@Body() New_Course: NewCourse): Promise<Course> {
    return this.Course_Service.addCourse(New_Course);
  }
}
