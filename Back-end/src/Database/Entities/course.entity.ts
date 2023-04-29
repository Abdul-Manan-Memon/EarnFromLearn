import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
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
  @Column({ type: 'number', default: 0 })
  Rating: number;
  @Column((type) => Lecture)
  Lectures: Lecture[];
  @Column((type) => Review_Course)
  Review: Review_Course[];
  @ManyToOne((type) => Instructor, (instructor) => instructor.Courses, {
    nullable: false,
  })
  @JoinColumn({
    /*referencedColumnName: 'Instructor_ID'*/
  })
  Instructor: Instructor;
  @Column({ nullable: false })
  Instructor_ID: string;
  @ManyToMany((type) => JOB, (job) => job.Tagged_Courses, { nullable: true })
  @JoinColumn({ referencedColumnName: 'JOB_ID' })
  Tagged_In: JOB[];
  constructor(New_Course?: NewCourse, Uploader?: Instructor) {
    super();
    if (New_Course != undefined) {
      this.Course_Title = New_Course.Title;
      this.Course_Description = New_Course.Description;
      this.Instructor = Uploader;
    }
  }
}
