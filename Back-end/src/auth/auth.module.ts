import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../Database/Entities/user.entity';
import { UserRepository } from '../Database/Repositories/user.repository';
import { StudentModule } from '../student/student.module';
import { RecruiterModule } from '../recruiter/recruiter.module';
import { InstructorModule } from '../instructor/instructor.module';
// import { JwtModule } from '@nestjs/jwt';
// import { Token } from './JWT/jwt-Token';
// import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.register(Token),
    TypeOrmModule.forFeature([User]),
    StudentModule,
    RecruiterModule,
    InstructorModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
  // exports: [AuthService, UserRepository],
})
export class AuthModule {}
