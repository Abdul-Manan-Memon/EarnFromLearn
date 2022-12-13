import { Roles } from 'src/Enum/Roles.enum';

export class CreateUserDto {
  Username: string;
  Password: string;
  Role: Roles;
}
