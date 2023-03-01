import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { InstructorModule } from './instructor/instructor.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { AuthModule } from './auth/auth.module';
import { Cloud_Connection } from './Database/DB_Config/TypeORM.cloud.config';
import { CourseModule } from './course/course.module';
import { JobModule } from './job/job.module';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync(Cloud_Connection),
    AuthModule,
    StudentModule,
    InstructorModule,
    RecruiterModule,
    CourseModule,
    JobModule,
    SkillModule,
    UserModule,
    MailModule,
  ],
})
export class AppModule {}
