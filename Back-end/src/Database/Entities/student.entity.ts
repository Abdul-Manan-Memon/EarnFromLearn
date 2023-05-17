import { SignUpDto } from 'src/Dto/SignUp.dto';
import { Column, Entity, ManyToMany, ObjectID, OneToMany } from 'typeorm';
import { user } from './abstract_class/user.class';
import { JOB } from './job.entity';
import { Course } from './course.entity';
import { Profile } from './Profile.entity';
@Entity()
export class Student extends user {
  @Column(() => Profile)
  Profile: Profile;
  @Column(() => Course)
  Courses: Course[];
  @ManyToMany(() => JOB, (job) => job.JOB_ID, { nullable: true, eager: true })
  Jobs: ObjectID[];

  constructor(NewSignup?: SignUpDto, User_ID?: ObjectID) {
    super(NewSignup, User_ID);
  }
}
