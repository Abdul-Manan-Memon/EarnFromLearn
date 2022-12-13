import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/Database/Entities/user.entity';
import { UserRepository } from 'src/Database/Repositories/user.repository';
import { StudentModule } from 'src/student/student.module';
import { RecruiterModule } from 'src/recruiter/recruiter.module';
import { InstructorModule } from 'src/instructor/instructor.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    StudentModule,
    RecruiterModule,
    InstructorModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
  exports: [AuthService, UserRepository],
})
export class AuthModule {}
