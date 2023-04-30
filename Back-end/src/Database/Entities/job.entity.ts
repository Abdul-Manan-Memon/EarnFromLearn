import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
} from 'typeorm';
import { Recruiter } from './recruiter.entity';
import { Student } from './student.entity';
import { Course } from './course.entity';
import { CreateJobDto } from 'src/Dto/createJob.dto';
@Entity()
export class JOB extends BaseEntity {
  @ObjectIdColumn({ type: 'uuid' })
  JOB_ID: ObjectID;
  @Column({ nullable: false })
  Job_Title: string;
  @Column({ nullable: false, type: 'text' })
  Job_Description: string;
  @ManyToOne(() => Recruiter, (recruiter) => recruiter._ID, {
    nullable: false,
  })
  Posted_By: ObjectID;
  @ManyToMany(() => Student, (student) => student._ID, { nullable: true })
  Applicants: ObjectID[];
  @OneToMany(() => Course, (course) => course.Course_ID, { nullable: true })
  Tagged_Courses: ObjectID[];
  constructor(NewJob?: CreateJobDto) {
    super();
    if (NewJob != undefined) {
      const { Title, Description } = NewJob;
      this.Job_Title = Title;
      this.Job_Description = Description;
    }
  }
}
