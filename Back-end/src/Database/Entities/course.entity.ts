import { Type } from 'class-transformer';
import {
  Column,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
} from 'typeorm';
import { Instructor } from './instructor.entity';
import { JOB } from './job.entity';

export class Course {
  @ObjectIdColumn({ type: 'uuid' })
  Course_ID: ObjectID;
  @Column({ nullable: false })
  Course_Title: string;
  @Column({ nullable: false, type: 'text' })
  Course_Description: string;
  @Column({ type: 'numeric' })
  Duration: number;
  @Column({ type: 'number' })
  Rating: number;
  //@ManyToOne((type) => Instructor, (instructor) => instructor.Instructor_ID)
  @Column({ nullable: true })
  @Type(() => Instructor)
  Instructor: Instructor;
  //Instructor;
  //@OneToMany((type) => JOB, (job) => job.Tagged_Courses)
  @Column({ nullable: true })
  @Type(() => JOB)
  Tagged_In: JOB;
}
