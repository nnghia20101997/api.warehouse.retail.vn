import { Body, Controller, HttpStatus, Post, Res, UseGuards, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Response } from "express";
import { Users } from 'src/users/users.entity/users.entity';
import { GetUserFromToken } from 'src/utils.common/utils.decorator.common/utils.decorator.common';
import { WareHouseSessionDetailExportDTO } from './warehouse-session-details.dto/warehouse-session-details.dto.export';
import { WarehouseSessionDetailService } from './warehouse-session-details.service';
import { BaseResponseData } from 'src/utils.common/utils.response.common/utils.base.response.common';
import { WareHouseSessionDetails } from './warehouse-session-details.entity/warehouse-session-details.entity';
import { WareHouseSessionDetailsResponse } from './warehouse-session-details.response/warehouse-session-details.response';
import { WareHouseSessionDetailImportDTO } from './warehouse-session-details.dto/warehouse-session-details.dto.import';
import { WareHouseSessionDetailRemoveDTO } from './warehouse-session-details.dto/warehouse-session-details.dto.remove';
import { WareHouseSessionDetailReturnDTO } from './warehouse-session-details.dto/warehouse-session-details.dto.return';

@Controller('/api/warehouse-session-details')
export class WarehouseSessionDetailController {
    constructor(private warehouseSessionDetailService: WarehouseSessionDetailService) { }

    @Post("/export")
    @UseGuards(JwtAuthGuard)
    async export(
        @Body(new ValidationPipe()) wareHouseSessionDetailExportDTO: WareHouseSessionDetailExportDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response
    ): Promise<any> {
        let response: BaseResponseData = new BaseResponseData();

        let wareHouseSessionDetail: WareHouseSessionDetails = await this.warehouseSessionDetailService.spCreateWarehouseSessionDetailExport(user, wareHouseSessionDetailExportDTO)

        response.setData(new WareHouseSessionDetailsResponse(wareHouseSessionDetail))

        res.status(HttpStatus.OK).send(response)
    }

    @Post("/import")
    @UseGuards(JwtAuthGuard)
    async import(
        @Body(new ValidationPipe()) wareHouseSessionDetailImportDTO: WareHouseSessionDetailImportDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response
    ): Promise<any> {
        let response: BaseResponseData = new BaseResponseData();

        let wareHouseSessionDetail: WareHouseSessionDetails = await this.warehouseSessionDetailService.spCreateWarehouseSessionDetailImport(user, wareHouseSessionDetailImportDTO)

        response.setData(new WareHouseSessionDetailsResponse(wareHouseSessionDetail))

        res.status(HttpStatus.OK).send(response)
    }

    @Post("/remove")
    @UseGuards(JwtAuthGuard)
    async remove(
        @Body(new ValidationPipe()) wareHouseSessionDetailRemoveDTO: WareHouseSessionDetailRemoveDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response
    ): Promise<any> {
        let response: BaseResponseData = new BaseResponseData();

        let wareHouseSessionDetail: WareHouseSessionDetails = await this.warehouseSessionDetailService.spCreateWarehouseSessionDetailRemove(user, wareHouseSessionDetailRemoveDTO)

        response.setData(new WareHouseSessionDetailsResponse(wareHouseSessionDetail))

        res.status(HttpStatus.OK).send(response)
    }

    @Post("/return")
    @UseGuards(JwtAuthGuard)
    async return(
        @Body(new ValidationPipe()) wareHouseSessionDetailReturnDTO: WareHouseSessionDetailReturnDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response
    ): Promise<any> {
        let response: BaseResponseData = new BaseResponseData();

        let wareHouseSessionDetail: WareHouseSessionDetails = await this.warehouseSessionDetailService.spCreateWarehouseSessionDetailRemove(user, wareHouseSessionDetailReturnDTO)

        response.setData(new WareHouseSessionDetailsResponse(wareHouseSessionDetail))

        res.status(HttpStatus.OK).send(response)
    }


}
