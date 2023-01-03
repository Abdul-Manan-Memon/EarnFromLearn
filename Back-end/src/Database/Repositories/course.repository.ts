import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from '../Entities/course.entity';
import { MongoRepository, ObjectID } from 'typeorm';
import { NewCourse } from 'src/Dto/createCourse.dto';
import { FilterCoursesDto } from 'src/Dto/get-courses-filter.dto';
import { User } from '../Entities/user.entity';
import { Instructor } from '../Entities/instructor.entity';
@Injectable()
export class CourseRepository {
  constructor(
    @InjectRepository(Course)
    private Course_Repository: MongoRepository<Course>,
  ) {}
  async getAllCourses(Search: FilterCoursesDto): Promise<Course[]> {
    // const { Course_ID, Instructor_ID } = Search;
    // return this.Course_Repository.createCursor({});
    // if (Course_ID) Query.andWhere('Course.Course_ID = :Course_ID', Course_ID);
    // if (Instructor_ID)
    //   Query.andWhere(
    //     'Course.Instructor.Instructor_ID = :Instructor_ID',
    //     Instructor_ID,
    //   );
    return;
  }
  async getCourseByID(id: ObjectID): Promise<Course> {
    //console.log('Before findone In Repo');
    return await this.Course_Repository.findOne({
      where: { Course_ID: id },
    });
  }
  async addCourse(
    Course_details: NewCourse,
    Uploader: Instructor,
  ): Promise<Course> {
    const New_Course = new Course(Course_details, Uploader);
    await this.Course_Repository.save(New_Course);
    delete New_Course.Instructor;
    return New_Course;
  }
}
