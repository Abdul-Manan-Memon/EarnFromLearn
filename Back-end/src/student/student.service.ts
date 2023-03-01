import { Injectable, NotFoundException } from '@nestjs/common';
import { SignUpDto } from '../Dto/SignUp.dto';
import { ObjectID } from 'typeorm';
import { Student } from '../Database/Entities/student.entity';
import { StudentRepository } from '../Database/Repositories/student.repository';

@Injectable()
export class StudentService {
  constructor(private readonly Student_Repository: StudentRepository) {}
  async getStudentByID(id: ObjectID): Promise<Student> {
    const Student = await this.Student_Repository.getStudentByID(id);
    if (!Student) {
      throw new NotFoundException('Student ID Not Found');
    }
    return Student;
  }
  async Signup(NewSignup: SignUpDto, ID: ObjectID): Promise<Student> {
    const Student = await this.Student_Repository.CreateStudent(NewSignup, ID);
    if (!Student) {
      throw new NotFoundException('Student Account Can Not Be Created');
    }
    return Student;
  }
}
