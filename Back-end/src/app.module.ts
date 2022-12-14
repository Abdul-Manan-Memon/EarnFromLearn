import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { InstructorModule } from './instructor/instructor.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { AuthModule } from './auth/auth.module';
import { Cloud_Connection } from './Database/Config/TypeORM.cloud.config';
import { CourseModule } from './course/course.module';
import { JobModule } from './job/job.module';
import { SkillModule } from './skill/skill.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(Cloud_Connection),
    StudentModule,
    InstructorModule,
    RecruiterModule,
    AuthModule,
    CourseModule,
    JobModule,
    SkillModule,
  ],
})
export class AppModule {}
