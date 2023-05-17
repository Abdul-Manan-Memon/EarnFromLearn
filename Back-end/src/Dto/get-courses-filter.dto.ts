import { ObjectID } from 'typeorm';

export class FilterCoursesDto {
  Course_ID: ObjectID;
  Instructor_ID: ObjectID;
  Student_ID: ObjectID;
  Job_ID: ObjectID;
}
