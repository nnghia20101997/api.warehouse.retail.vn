import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from 'src/auth/constants';
import { WarehouseSessionsController } from './warehouse-sessions.controller';
import { WareHouseSessions } from './warehouse-sessions.entity/warehouse-sessions.entity';
import { WarehouseSessionsService } from './warehouse-sessions.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([WareHouseSessions]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60m' },
        }),
    ],
    providers: [WarehouseSessionsService],
    exports: [WarehouseSessionsService],
    controllers: [WarehouseSessionsController],
})
export class WarehouseSessionsModule { }
