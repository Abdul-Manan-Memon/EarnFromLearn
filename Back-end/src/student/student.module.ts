import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../Database/Entities/student.entity';
import { StudentRepository } from '../Database/Repositories/student.repository';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Course } from 'src/Database/Entities/course.entity';
import { CourseModule } from 'src/course/course.module';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), CourseModule],
  controllers: [StudentController],
  providers: [StudentRepository, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
