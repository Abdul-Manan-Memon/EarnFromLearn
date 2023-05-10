import { Lecture } from 'src/Database/Entities/lecture.entity';

export class NewCourse {
  Course_Title: string;
  Course_Description: string;
  Course_Level: string;
  Course_Category: string;
  Course_Requirements: string;
  Course_Outcome: string;
  Course_Price: number;
  Course_Url: string;
  Lectures: Lecture[];
}
