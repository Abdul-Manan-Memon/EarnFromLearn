import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Course } from 'src/Database/Entities/course.entity';
import { User } from 'src/Database/Entities/user.entity';
import { CourseRepository } from 'src/Database/Repositories/course.repository';
import { NewCourse } from 'src/Dto/createCourse.dto';
import { FilterCoursesDto } from 'src/Dto/get-courses-filter.dto';
import { InstructorService } from 'src/instructor/instructor.service';
import { ObjectID } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    private readonly Course_Repository: CourseRepository,
    @Inject(InstructorService)
    private readonly Instrctor_Sevice,
  ) {}
  async getAllCourses(Search: FilterCoursesDto): Promise<Course[]> {
    const Courses = await this.Course_Repository.getAllCourses(Search);
    if (!Courses) throw new NotFoundException('No any Course Found');
    return Courses;
  }
  async getCourseByID(id: ObjectID): Promise<Course> {
    const course = await this.Course_Repository.getCourseByID(id);
    if (!course) {
      throw new NotFoundException('Course Not Found');
    }
    return course;
  }
  async addCourse(New_Course: NewCourse, Uploader: User): Promise<Course> {
    const instructor = await this.Instrctor_Sevice.getInstructorByID(
      Uploader.User_ID,
    );
    const course = await this.Course_Repository.addCourse(
      New_Course,
      instructor,
    );
    if (!course) {
      throw new UnauthorizedException();
    }
    return course;
  }
}
