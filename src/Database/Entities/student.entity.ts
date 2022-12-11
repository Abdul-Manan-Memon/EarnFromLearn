import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
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
  @Column({ nullable: false })
  Password: string;
}
