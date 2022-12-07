import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
@Entity()
export class Student {
  @ObjectIdColumn()
  Student_ID: ObjectID;
  @Column()
  First_Name: string;
  @Column()
  Last_Name: string;
  @Column()
  Email: string;
  @Column()
  Password: string
}
