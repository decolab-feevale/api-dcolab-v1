import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './app/user/user.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (configService: ConfigService)=>({
      type: 'mysql',
      host: configService.get('DB_HOSTNAME','ceted.feevale.br'),
      port: Number(configService.get('DB_PORT',3306)),
      username: configService.get('DB_USERNAME','redesocial_tmpuser'),
      password: configService.get('DB_PASSWORD','redesocial_tmp*123A*'),
      database: configService.get('DB_DATABASE','redesocial_tmp'),
      entities: [join(__dirname, './**/*.entity{.ts,.js}')],
      synchronize: true,
      })
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
