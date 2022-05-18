import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from 'src/auth/constants';
import { WarehouseSessionDetailController } from './warehouse-session-detail.controller';
import { WareHouseSessionDetails } from './warehouse-session-details.entity/warehouse-session-details.entity';
import { WarehouseSessionDetailService } from './warehouse-session-details.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([WareHouseSessionDetails]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60m' },
        }),
    ],
    providers: [WarehouseSessionDetailService],
    exports: [WarehouseSessionDetailService],
    controllers: [WarehouseSessionDetailController],
})
export class WarehouseSessionDetailModule { }
