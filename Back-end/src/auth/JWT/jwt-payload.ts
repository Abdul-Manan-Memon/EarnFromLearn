import { Roles } from 'src/Enum/Roles.enum';
import { ObjectID } from 'typeorm';

export interface Paylaod {
  User_ID: ObjectID;
  Role: Roles;
}
