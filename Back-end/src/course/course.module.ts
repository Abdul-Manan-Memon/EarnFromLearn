import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/Database/Entities/course.entity';
import { CourseRepository } from 'src/Database/Repositories/course.repository';
import { InstructorModule } from 'src/instructor/instructor.module';

@Module({
  imports: [TypeOrmModule.forFeature([Course]), InstructorModule],
  controllers: [CourseController],
  providers: [CourseService, CourseRepository],
  exports: [CourseService],
})
export class CourseModule {}
