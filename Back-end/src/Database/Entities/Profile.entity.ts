import { Column } from 'typeorm';

export class Profile {
  @Column()
  Name: string;
  @Column()
  Age: number;
}
