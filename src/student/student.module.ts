import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Student } from '../Database/Entities/student.entity';
import { StudentRepository } from '../Database/Repositories/student.repository';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student]),AuthModule],
  controllers: [StudentController],
  providers: [StudentRepository, StudentService],
  exports:[StudentService]
})
export class StudentModule {}
