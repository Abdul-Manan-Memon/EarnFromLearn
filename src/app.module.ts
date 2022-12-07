import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { InstructorModule } from './instructor/instructor.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { AuthModule } from './auth/auth.module';
import { Cloud_Connection } from './Database/Config/TypeORM.cloud.config';
@Module({
  imports: [
    StudentModule,
    InstructorModule,
    RecruiterModule,
    AuthModule,
    TypeOrmModule.forRoot(Cloud_Connection),
  ],
})
export class AppModule {}
