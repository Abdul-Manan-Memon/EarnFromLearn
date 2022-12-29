import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Course } from 'src/Database/Entities/course.entity';
import { CourseRepository } from 'src/Database/Repositories/course.repository';
import { NewCourse } from 'src/Dto/createCourse.dto';
import { ObjectID } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(private readonly Course_Repository: CourseRepository) {}
  async getCourseByID(id: ObjectID): Promise<Course> {
    const course = await this.Course_Repository.getCourseByID(id);
    if (!course) {
      throw new NotFoundException('Course Not Found');
    }
    return course;
  }
  async addCourse(New_Course: NewCourse): Promise<Course> {
    const course = await this.Course_Repository.addCourse(New_Course);
    if (!course) {
      throw new UnauthorizedException();
    }
    return course;
  }
}
