import { Entity, ObjectID, OneToMany } from 'typeorm';
import { Course } from './course.entity';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { user } from './abstract_class/user.class';
@Entity()
export class Instructor extends user {
  @OneToMany(() => Course, (course) => course.Course_ID)
  Courses: ObjectID[];
  constructor(NewSignup?: SignUpDto, User_ID?: ObjectID) {
    super(NewSignup, User_ID);
  }
}
