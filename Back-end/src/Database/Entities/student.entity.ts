import { SignUpDto } from 'src/Dto/SignUp.dto';
import {
  Column,
  Entity,
  JoinColumn,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
} from 'typeorm';
import { user } from './abstract_class/user.class';
import { JOB } from './job.entity';
@Entity()
export class Student extends user {
  @OneToMany((type) => JOB, (job) => job.Applicants)
  @JoinColumn({ referencedColumnName: 'JOB_ID' })
  Jobs: JOB[];

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
