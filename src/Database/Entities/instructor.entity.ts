import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
@Entity()
export class Instructor {
  @ObjectIdColumn()
  Instructor_ID: ObjectID;
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
  User_ID: ObjectID;
}
