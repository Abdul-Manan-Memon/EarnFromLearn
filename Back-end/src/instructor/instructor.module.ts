import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instructor } from 'src/Database/Entities/instructor.entity';
import { InstructorRepository } from 'src/Database/Repositories/instructor.repository';
import { InstructorController } from './instructor.controller';
import { InstructorService } from './instructor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Instructor])],
  controllers: [InstructorController],
  providers: [InstructorRepository, InstructorService],
  exports: [InstructorService],
})
export class InstructorModule {}
