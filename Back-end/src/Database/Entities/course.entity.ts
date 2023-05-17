import {
  BaseEntity,
  Column,
  Entity,
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
  @Column({})
  Level: string;
  @Column({})
  Category: string;
  @Column({})
  Requirements: string;
  @Column({})
  Outcome: string;
  @Column({})
  Course_Url: string;
  @Column({})
  Price: number;
  @Column(() => Lecture)
  Lectures: Lecture[];
  @Column(() => Review_Course)
  Review: Review_Course[];
  @Column({ type: 'alphanum' })
  Instructor: ObjectID;
  @ManyToOne(() => JOB, (job) => job.JOB_ID)
  Tagged_In: ObjectID[];

  constructor(New_Course?: NewCourse, Uploader?: ObjectID) {
    super();
    if (New_Course != undefined && Uploader != undefined) {
      const {
        Course_Title,
        Course_Description,
        Course_Level,
        Course_Category,
        Course_Requirements,
        Course_Outcome,
        Course_Price,
        Course_Url,
        Lectures,
      } = New_Course;
      this.Course_Title = Course_Title;
      this.Course_Description = Course_Description;
      this.Level = Course_Level;
      this.Category = Course_Category;
      this.Requirements = Course_Requirements;
      this.Outcome = Course_Outcome;
      this.Price = Course_Price;
      this.Course_Url = Course_Url;
      this.Lectures = Lectures;
      this.Instructor = Uploader;
      this.Duration = 0;
      this.Rating = 0;
    }
  }
}
