import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
export const Cloud_Connection: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
    type: config.get('DB_TYPE'),
    url: `mongodb+srv://${config.get('DB_USERNAME')}:${config.get(
      'DB_PASSWORD',
    )}@${config.get('DB_CLUSTER')}/${config.get(
      'DATABASE_NAME',
    )}?retryWrites=true`,
    entities: [__dirname + '/../**/*.entity{.ts,.js}}'],
    autoLoadEntities: true,
    synchronize: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    logging: true,
  }),
};
