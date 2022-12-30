import { SignUpDto } from 'src/Dto/SignUp.dto';
import {
  Column,
  Entity,
  JoinColumn,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
} from 'typeorm';
import { JOB } from './job.entity';
@Entity()
export class Student {
  @ObjectIdColumn()
  Student_ID: ObjectID;
  @Column({ nullable: false })
  First_Name: string;
  @Column()
  Last_Name: string;
  @Column({
    nullable: false,
    unique: true,
  })
  Email: string;
  @OneToMany((type) => JOB, (job) => job.Applicants)
  @JoinColumn({ referencedColumnName: 'JOB_ID' })
  Jobs: JOB[];

  constructor(NewSignup?: SignUpDto, ID?: ObjectID) {
    if (NewSignup != undefined && ID != undefined) {
      this.Student_ID = ID;
      this.First_Name = NewSignup.First_Name;
      this.Last_Name = NewSignup.Last_Name;
      this.Email = NewSignup.Username;
    }
  }
}
