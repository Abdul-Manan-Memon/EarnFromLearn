import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from 'src/Dto/SignUp.dto';
import { MongoRepository, ObjectID } from 'typeorm';
import { Student } from '../Entities/student.entity';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectRepository(Student)
    private Student_Repository: MongoRepository<Student>,
  ) {}
  async getStudentByID(id: ObjectID): Promise<Student> {
    //console.log('Before findone In Repo');
    return await this.Student_Repository.findOne({ where: { Student_ID: id } });
  }
  async CreateStudent(NewSignup: SignUpDto, ID: ObjectID): Promise<Student> {
    const NewStudent = new Student();
    const { First_Name, Last_Name, Username } = NewSignup;
    NewStudent.User_ID = ID;
    NewStudent.First_Name = First_Name;
    NewStudent.Last_Name = Last_Name;
    NewStudent.Email = Username;
    await this.Student_Repository.save(NewStudent);
    return NewStudent;
  }
}
