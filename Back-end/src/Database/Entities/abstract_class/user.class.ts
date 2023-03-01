import { Column, ObjectID, ObjectIdColumn } from 'typeorm';

export abstract class user {
  @ObjectIdColumn()
  _ID: ObjectID;
  @Column({ nullable: false })
  First_Name: string;
  @Column()
  Last_Name: string;
  @Column({
    nullable: false,
    unique: true,
  })
  Email: string;
}
