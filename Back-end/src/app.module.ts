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
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(Cloud_Connection),
    AuthModule,
    StudentModule,
    InstructorModule,
    RecruiterModule,
    CourseModule,
    JobModule,
    SkillModule,
    UserModule,
  ],
})
export class AppModule {}
