import {
  Column,
  Entity,
  JoinColumn,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
} from 'typeorm';
import { Course } from './course.entity';
@Entity()
export class Instructor {
  @ObjectIdColumn()
  Instructor_ID: ObjectID;
  @Column({ nullable: false })
  First_Name: string;
  @Column()
  Last_Name: string;
  @Column({
    nullable: false,
    unique: true,
  })
  Email: string;
  @OneToMany((type) => Course, (course) => course.Instructor)
  @JoinColumn({ referencedColumnName: 'Course_ID' })
  Courses: Course[];
}
