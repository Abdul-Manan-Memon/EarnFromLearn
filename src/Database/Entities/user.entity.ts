import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  User_ID: ObjectID; 
  @Column()
  Username: string;
  @Column()
  Password: string;
}
