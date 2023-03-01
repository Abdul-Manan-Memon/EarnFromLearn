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
import { user } from './abstract_class/user.class';
@Entity()
export class Instructor extends user {
  @OneToMany((type) => Course, (course) => course.Instructor, {
    nullable: true,
    eager: true,
  })
  //@JoinColumn({ referencedColumnName: 'Course_ID' })
  Courses: Course[];

  constructor(NewSignup?: SignUpDto, ID?: ObjectID) {
    super();
    if (NewSignup != undefined && ID != undefined) {
      this._ID = ID;
      this.First_Name = NewSignup.First_Name;
      this.Last_Name = NewSignup.Last_Name;
      this.Email = NewSignup.Username;
    }
  }
}
