import { Column, Entity, ObjectID } from 'typeorm';

@Entity()
export class User {
  @Column()
  User_ID: ObjectID 
  @Column()
  Username: string;
  @Column()
  Password: string;
}
