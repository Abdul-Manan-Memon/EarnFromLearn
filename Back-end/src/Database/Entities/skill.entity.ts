import { Type } from 'class-transformer';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { Course } from './course.entity';
import { Student } from './student.entity';

@Entity()
export class Skill {
  @ObjectIdColumn()
  Skill_ID: ObjectID;
  @Column({ nullable: false })
  Skill_Name: string;
  @Column({ nullable: false, type: 'float' })
  Subscription: number;
  @Column((type) => Course)
  Courses: Course[];
  @Column()
  @Type(() => Student)
  Enrolled_Students: Student;
}
