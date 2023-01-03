import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { NewCourse } from 'src/Dto/createCourse.dto';
import { Course } from 'src/Database/Entities/course.entity';
import { AuthGuard } from '@nestjs/passport';
import { FilterCoursesDto } from 'src/Dto/get-courses-filter.dto';
import { GetUser } from 'src/Decorators/get-user-decorator';
import { User } from 'src/Database/Entities/user.entity';

@Controller('course')
@UseGuards(AuthGuard())
export class CourseController {
  constructor(private Course_Service: CourseService) {}
  @Get()
  async getAllCourses(@Query() Search: FilterCoursesDto): Promise<Course[]> {
    return await this.Course_Service.getAllCourses(Search);
  }

  @Post('/addCourse')
  async addCourse(
    @Body() New_Course: NewCourse,
    @GetUser() Uploader: User,
  ): Promise<Course> {
    return await this.Course_Service.addCourse(New_Course, Uploader);
  }
}
