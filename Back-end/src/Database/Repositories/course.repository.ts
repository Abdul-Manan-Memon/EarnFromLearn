import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from '../Entities/course.entity';
import { MongoRepository, ObjectID } from 'typeorm';
import { NewCourse } from 'src/Dto/createCourse.dto';
@Injectable()
export class CourseRepository {
  constructor(
    @InjectRepository(Course)
    private Course_Repository: MongoRepository<Course>,
  ) {}
  async getCourseByID(id: ObjectID): Promise<Course> {
    //console.log('Before findone In Repo');
    return await this.Course_Repository.findOne({
      where: { Course_ID: id },
    });
  }
  async addCourse(Course_details: NewCourse): Promise<Course> {
    const New_Course = new Course(Course_details);
    return await this.Course_Repository.save(New_Course);
  }
}
