import { SignUpDto } from 'src/Dto/SignUp.dto';
import { BaseEntity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

export abstract class user extends BaseEntity {
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
  @Column({ type: 'string', nullable: false })
  User_ID: ObjectID;
  constructor(NewSignup?: SignUpDto, User_ID?: ObjectID) {
    super();
    if (NewSignup != undefined && User_ID != undefined) {
      const { First_Name, Last_Name, Username } = NewSignup;
      this.First_Name = First_Name;
      this.Last_Name = Last_Name;
      this.Email = Username;
      this.User_ID = User_ID;
    }
  }
}
