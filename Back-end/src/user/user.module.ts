import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/Database/Entities/user.entity';
import { InstructorModule } from 'src/instructor/instructor.module';
import { RecruiterModule } from 'src/recruiter/recruiter.module';
import { StudentModule } from 'src/student/student.module';
import { UserRepository } from 'src/Database/Repositories/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    StudentModule,
    RecruiterModule,
    InstructorModule,
  ],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
