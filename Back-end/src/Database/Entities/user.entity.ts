import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Roles } from 'src/Enum/Roles.enum';
@Entity()
export class User {
  @ObjectIdColumn()
  User_ID: ObjectID;
  @Column({
    unique: true,
    nullable: false,
  })
  Username: string;
  @Column({ nullable: false })
  Password: string;
  @Column({ nullable: false })
  Salt: string;
  @Column({ nullable: false, default: 'Student' })
  Role: Roles;
  async ValidatePassword(Password: string): Promise<boolean> {
    const Hash = await bcrypt.hash(Password, this.Salt);
    return Hash === this.Password;
  }
}
