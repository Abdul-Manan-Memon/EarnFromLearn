import { ObjectID } from 'typeorm';

export class FilterCoursesDto {
  Course_ID: ObjectID;
  Instructor_ID: ObjectID;
}
