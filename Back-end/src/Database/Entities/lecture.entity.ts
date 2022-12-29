import { Column, ObjectID, ObjectIdColumn } from 'typeorm';

export class Lecture {
  @ObjectIdColumn({ type: 'uuid' })
  Lecture_ID: ObjectID;
  @Column({ nullable: false })
  Lecture_Title: string;
  @Column({ type: 'numeric' })
  Duration: number;
  @Column({})
  Video: string;
}
