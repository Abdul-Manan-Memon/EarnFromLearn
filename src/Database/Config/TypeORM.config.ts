import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const Connection: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'EarnFromLearn',
  entities: [__dirname + '/../**/*.entity{.ts,.js}}'],
  autoLoadEntities: true,
  synchronize: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
