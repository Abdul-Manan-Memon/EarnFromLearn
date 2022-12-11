import { Column, Entity, ObjectIdColumn } from 'typeorm';
import * as bcrypt from "bcryptjs";
@Entity()

export class User {
  @ObjectIdColumn()
  User_ID: string; 
  @Column(
      {
        unique: true, 
        nullable: false
      } 
    )
  Username: string;
  @Column({nullable: false})
  Password: string;
  @Column({nullable: false})
  Salt: string; 
  async ValidatePassword(Password: string): Promise<boolean> {
    const Hash = await bcrypt.hash(Password,this.Salt);
    return Hash === this.Password;
  }
}
