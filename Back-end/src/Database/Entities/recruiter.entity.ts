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
export class Recruiter extends user {
  @OneToMany(() => JOB, (job) => job.Posted_By)
  @JoinColumn({ referencedColumnName: 'JOB_ID' })
  Jobs: JOB[];

  constructor(NewSignup?: SignUpDto, User_ID?: ObjectID) {
    super(NewSignup, User_ID);
  }
}
