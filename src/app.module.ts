import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WarehouseSessionsModule } from './warehouse-sessions/warehouse-sessions.module';
import { WarehouseSessionDetailController } from './warehouse-session-details/warehouse-session-detail.controller';
import { WarehouseSessionDetailService } from './warehouse-session-details/warehouse-session-details.service';
import { WarehouseSessionDetailModule } from './warehouse-session-details/warehouse-session-details.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      multipleStatements: true,
      dateStrings: true,
    }),
    AuthModule,
    UsersModule,
    WarehouseSessionsModule,
    WarehouseSessionDetailModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
