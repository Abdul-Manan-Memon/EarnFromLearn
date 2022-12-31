import { Roles } from 'src/Enum/Roles.enum';
import { ObjectID } from 'typeorm';

export interface Payload {
  User_ID: ObjectID;
  Username: string;
  Role: Roles;
}
