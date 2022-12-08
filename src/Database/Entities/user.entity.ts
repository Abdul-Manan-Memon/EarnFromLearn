import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  User_ID: string; 
  @Column()
  Username: string;
  @Column()
  Password: string;
}
