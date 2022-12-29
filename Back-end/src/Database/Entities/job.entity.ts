import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
import { Course } from './course.entity';
import { Recruiter } from './recruiter.entity';
import { Student } from './student.entity';
@Entity()
export class JOB {
  @ObjectIdColumn({})
  Job_ID: ObjectID;
  @Column({ nullable: false })
  Job_Title: string;
  @Column({ nullable: false, type: 'text' })
  Job_Description: string;
  @ManyToOne((type) => Recruiter, (recruiter) => recruiter.Recruiter_ID, {
    nullable: false,
  })
  @JoinColumn({ referencedColumnName: 'Recruiter_ID' })
  // @Column({ nullable: false })
  // @Type(() => Recruiter)
  Posted_By: Recruiter;
  @ManyToMany((type) => Student, (student) => student.Student_ID, {
    nullable: true,
  })
  @JoinColumn({ referencedColumnName: 'Student_ID' })
  // @Column({ nullable: true })
  // @Type(() => Student)
  Applicants: Student[];
  @ManyToMany((type) => Course, (course) => course.Tagged_In, {
    nullable: true,
  })
  @JoinColumn({ referencedColumnName: 'Course_ID' })
  // @Column({ nullable: false })
  // @Type(() => Course)
  Tagged_Courses: Course[];
}
