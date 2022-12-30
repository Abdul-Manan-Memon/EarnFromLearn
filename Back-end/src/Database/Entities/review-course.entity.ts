import { Column, ObjectID, ObjectIdColumn } from 'typeorm';

export class Review_Course {
  @ObjectIdColumn({ type: 'uuid' })
  Review_ID: ObjectID;
  @Column({ nullable: false, type: 'text' })
  Comments: string;
  // @Column({ nullable: false })
  // Reviewer_ID: ObjectID;
}
