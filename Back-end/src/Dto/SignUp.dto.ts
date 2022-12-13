import { Roles } from '../Enum/Roles.enum';

export class SignUpDto {
  First_Name: string;
  Last_Name: string;
  Username: string;
  Password: string;
  Role: Roles;
}
