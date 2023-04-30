import {
  BaseEntity,
  Column,
  Entity,
  IsNull,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
import { Instructor } from './instructor.entity';
import { JOB } from './job.entity';
import { Lecture } from './lecture.entity';
import { Review_Course } from './review-course.entity';
import { NewCourse } from 'src/Dto/createCourse.dto';

@Entity()
export class Course extends BaseEntity {
  @ObjectIdColumn({ type: 'uuid' })
  Course_ID: ObjectID;
  @Column({ nullable: false })
  Course_Title: string;
  @Column({ nullable: false, type: 'text' })
  Course_Description: string;
  @Column({ type: 'numeric' })
  Duration: number;
  @Column({ type: 'number', default: null })
  Rating: number;
  @Column(() => Lecture)
  Lectures: Lecture[];
  @Column(() => Review_Course)
  Review: Review_Course[];
  @ManyToOne(() => Instructor, (instructor) => instructor._ID, {
    nullable: false,
    eager: true,
  })
  Instructor: ObjectID;
  @ManyToOne(() => JOB, (job) => job.JOB_ID)
  Tagged_In: ObjectID[];

  constructor(New_Course?: NewCourse, Uploader?: ObjectID) {
    super();
    if (New_Course != undefined && Uploader != undefined) {
      this.Course_Title = New_Course.Title;
      this.Course_Description = New_Course.Description;
      this.Instructor = Uploader;
      this.Duration;
      this.Lectures;
      this.Review;
      this.Tagged_In;
    }
  }
}
