import { Body, Controller, Post, Res, UseGuards, Request, HttpStatus, ValidationPipe, Get } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Users } from 'src/users/users.entity/users.entity';
import { GetUserFromToken } from 'src/utils.common/utils.decorator.common/utils.decorator.common';
import { BaseResponseData } from 'src/utils.common/utils.response.common/utils.base.response.common';
import { WareHouseSessionsCreateDTO } from './warehouse-sessions.dto/warehouse-sessions.create.dto';
import { WareHouseSessionsExportDTO } from './warehouse-sessions.dto/warehouse-sessions.export.dto';
import { WareHouseSessionsImportDTO } from './warehouse-sessions.dto/warehouse-sessions.import.dto';
import { WareHouseSessionsQueryDTO } from './warehouse-sessions.dto/warehouse-sessions.query.dto';
import { WareHouseSessionsRemoveDTO } from './warehouse-sessions.dto/warehouse-sessions.remove.dto';
import { WareHouseSessionsReturnDTO } from './warehouse-sessions.dto/warehouse-sessions.return.dto';
import { WareHouseSessions } from './warehouse-sessions.entity/warehouse-sessions.entity';
import { WareHouseSessionsDetailResponse } from './warehouse-sessions.response/warehouse-sessions.response';
import { WarehouseSessionsService } from './warehouse-sessions.service';

@Controller('/api/warehouse-sessions')
export class WarehouseSessionsController {
    constructor(private warehouseSessionsService: WarehouseSessionsService) { }

    @Post("/create")
    @UseGuards(JwtAuthGuard)
    async create(
        @Body(new ValidationPipe()) wareHouseSessionsCreateDTO: WareHouseSessionsCreateDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response,
        @Request() req
    ): Promise<any> {
        let response: BaseResponseData = new BaseResponseData();

        let wareHouseSessions: WareHouseSessions = await this.warehouseSessionsService.spCreateWarehouseSession(user, wareHouseSessionsCreateDTO)

        response.setData(new WareHouseSessionsDetailResponse(wareHouseSessions))

        res.status(HttpStatus.OK).send(response)
    }

    @Post("/export")
    @UseGuards(JwtAuthGuard)
    async export(
        @Body(new ValidationPipe()) wareHouseSessionsExportDTO: WareHouseSessionsExportDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response,
        @Request() req
    ): Promise<any> {
        let response: BaseResponseData = new BaseResponseData();

        let wareHouseSessions: WareHouseSessions = await this.warehouseSessionsService.spCreateWarehouseSessionExport(user, wareHouseSessionsExportDTO)

        response.setData(new WareHouseSessionsDetailResponse(wareHouseSessions))

        res.status(HttpStatus.OK).send(response)
    }


    @Post("/import")
    @UseGuards(JwtAuthGuard)
    async import(
        @Body(new ValidationPipe()) wareHouseSessionsImportDTO: WareHouseSessionsImportDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response,
        @Request() req
    ): Promise<any> {
        let response: BaseResponseData = new BaseResponseData();

        let wareHouseSessions: WareHouseSessions = await this.warehouseSessionsService.spCreateWarehouseSessionImport(user, wareHouseSessionsImportDTO)

        response.setData(new WareHouseSessionsDetailResponse(wareHouseSessions))

        res.status(HttpStatus.OK).send(response)
    }


    @Post("/remove")
    @UseGuards(JwtAuthGuard)
    async remove(
        @Body(new ValidationPipe()) wareHouseSessionsRemoveDTO: WareHouseSessionsRemoveDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response,
        @Request() req
    ): Promise<any> {
        let response: BaseResponseData = new BaseResponseData();

        let wareHouseSessions: WareHouseSessions = await this.warehouseSessionsService.spCreateWarehouseSessionRemove(user, wareHouseSessionsRemoveDTO)

        response.setData(new WareHouseSessionsDetailResponse(wareHouseSessions))

        res.status(HttpStatus.OK).send(response)
    }

    @Post("return")
    @UseGuards(JwtAuthGuard)
    async return(
        @Body(new ValidationPipe()) wareHouseSessionsReturnDTO: WareHouseSessionsReturnDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response,
        @Request() req
    ): Promise<any> {
        let response: BaseResponseData = new BaseResponseData();

        let wareHouseSessions: WareHouseSessions = await this.warehouseSessionsService.spCreateWarehouseSessionReturn(user, wareHouseSessionsReturnDTO)

        response.setData(new WareHouseSessionsDetailResponse(wareHouseSessions))

        res.status(HttpStatus.OK).send(response)
    }

    @Get("")
    @UseGuards(JwtAuthGuard)
    async getList(
        @Body(new ValidationPipe()) wareHouseSessionsQueryDTO: WareHouseSessionsQueryDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response,
        @Request() req
    ): Promise<any> {

        let response: BaseResponseData = new BaseResponseData();

        let wareHouseSessions: WareHouseSessions[] = await this.warehouseSessionsService.spGetListWarehouseSessionByType(wareHouseSessionsQueryDTO.type)

        response.setData(new WareHouseSessionsDetailResponse().mapToList(wareHouseSessions))

        res.status(HttpStatus.OK).send(response)
    }
}


