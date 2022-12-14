import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const Cloud_Connection: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: 'mongodb+srv://Abdul-Manan:I_abdulmanan22@earnfromlearn.homaspm.mongodb.net/EarnFromLearn?retryWrites=true',
  entities: [__dirname + '/../**/*.entity{.ts,.js}}'],
  autoLoadEntities: true,
  synchronize: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  logging: true,
};
