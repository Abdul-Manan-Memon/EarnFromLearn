import { SignUpDto } from 'src/Dto/SignUp.dto';
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

  constructor(NewSignup: SignUpDto, ID: ObjectID) {
    this.Student_ID = ID;
    this.First_Name = NewSignup.First_Name;
    this.Last_Name = NewSignup.Last_Name;
    this.Email = NewSignup.Username;
  }
}
