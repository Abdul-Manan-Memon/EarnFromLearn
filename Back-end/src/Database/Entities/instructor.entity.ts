import {
  Column,
  Entity,
  JoinColumn,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
} from 'typeorm';
import { Course } from './course.entity';
import { SignUpDto } from 'src/Dto/SignUp.dto';
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
  @OneToMany((type) => Course, (course) => course.Instructor, {
    nullable: true,
    eager: true,
  })
  @JoinColumn({ referencedColumnName: 'Course_ID' })
  Courses: Course[];

  constructor(NewSignup?: SignUpDto, ID?: ObjectID) {
    if (NewSignup != undefined && ID != undefined) {
      this.Instructor_ID = ID;
      this.First_Name = NewSignup.First_Name;
      this.Last_Name = NewSignup.Last_Name;
      this.Email = NewSignup.Username;
    }
  }
}
