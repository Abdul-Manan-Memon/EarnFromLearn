import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../../src/Database/Entities/student.entity';
import { StudentRepository } from '../../src/Database/Repositories/student.repository';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentRepository, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
