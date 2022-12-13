import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instructor } from '../Database/Entities/instructor.entity';
import { InstructorRepository } from '../Database/Repositories/instructor.repository';
import { InstructorController } from './instructor.controller';
import { InstructorService } from './instructor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Instructor])],
  controllers: [InstructorController],
  providers: [InstructorRepository, InstructorService],
  exports: [InstructorService],
})
export class InstructorModule {}
