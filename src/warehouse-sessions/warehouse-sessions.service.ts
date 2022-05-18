import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity/users.entity';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-proceduce-result.common/utils.store-proceduce-result.common';
import { Repository } from 'typeorm';
import { WareHouseSessionsCreateDTO } from './warehouse-sessions.dto/warehouse-sessions.create.dto';
import { WareHouseSessionsExportDTO } from './warehouse-sessions.dto/warehouse-sessions.export.dto';
import { WareHouseSessionsImportDTO } from './warehouse-sessions.dto/warehouse-sessions.import.dto';
import { WareHouseSessionsRemoveDTO } from './warehouse-sessions.dto/warehouse-sessions.remove.dto';
import { WareHouseSessions } from './warehouse-sessions.entity/warehouse-sessions.entity';

@Injectable()
export class WarehouseSessionsService {

    @InjectRepository(WareHouseSessions)
    private wareHouseSessions: Repository<WareHouseSessions>


    async spCreateWarehouseSession(
        user: Users,
        wareHouseSessionsCreateDTO: WareHouseSessionsCreateDTO
    ): Promise<WareHouseSessions> {

        let newWareHouseSessions: WareHouseSessions = await this.wareHouseSessions.query(
            "CALL sp_create_warehouse_session(?,?,?,?,?,?,?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                wareHouseSessionsCreateDTO.code,
                wareHouseSessionsCreateDTO.amount,
                wareHouseSessionsCreateDTO.discount_percent,
                wareHouseSessionsCreateDTO.vat,
                wareHouseSessionsCreateDTO.material_id,
                wareHouseSessionsCreateDTO.material_name,
                wareHouseSessionsCreateDTO.type,
                wareHouseSessionsCreateDTO.warehouse_session_status,
                wareHouseSessionsCreateDTO.addition_fee_id,
                wareHouseSessionsCreateDTO.receipt_number_no,
                wareHouseSessionsCreateDTO.discount_type,
                wareHouseSessionsCreateDTO.is_include_vat,
                wareHouseSessionsCreateDTO.description,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(newWareHouseSessions);
        let data: WareHouseSessions = new StoreProcedureResult<WareHouseSessions>().getResultDetail(newWareHouseSessions);
        return data;
    }

    async spCreateWarehouseSessionExport(
        user: Users,
        wareHouseSessionsExportDTO: WareHouseSessionsExportDTO
    ): Promise<WareHouseSessions> {

        let wareHouseSessionExport: WareHouseSessions = await this.wareHouseSessions.query(
            "CALL sp_create_warehouse_session_export(?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                wareHouseSessionsExportDTO.amount,
                wareHouseSessionsExportDTO.discount_percent,
                wareHouseSessionsExportDTO.vat,
                wareHouseSessionsExportDTO.material_id,
                wareHouseSessionsExportDTO.warehouse_session_status,
                wareHouseSessionsExportDTO.discount_type,
                wareHouseSessionsExportDTO.description,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(wareHouseSessionExport);
        let data: WareHouseSessions = new StoreProcedureResult<WareHouseSessions>().getResultDetail(wareHouseSessionExport);
        return data;
    }

    async spCreateWarehouseSessionImport(
        user: Users,
        wareHouseSessionsImportDTO: WareHouseSessionsImportDTO
    ): Promise<WareHouseSessions> {

        let wareHouseSessionImport: WareHouseSessions = await this.wareHouseSessions.query(
            "CALL sp_create_warehouse_session_import(?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                wareHouseSessionsImportDTO.amount,
                wareHouseSessionsImportDTO.discount_percent,
                wareHouseSessionsImportDTO.vat,
                wareHouseSessionsImportDTO.material_id,
                wareHouseSessionsImportDTO.warehouse_session_status,
                wareHouseSessionsImportDTO.discount_type,
                wareHouseSessionsImportDTO.description,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(wareHouseSessionImport);
        let data: WareHouseSessions = new StoreProcedureResult<WareHouseSessions>().getResultDetail(wareHouseSessionImport);
        return data;
    }

    async spCreateWarehouseSessionRemove(
        user: Users,
        wareHouseSessionsRemoveDTO: WareHouseSessionsRemoveDTO
    ): Promise<WareHouseSessions> {

        let wareHouseSessionRemoved: WareHouseSessions = await this.wareHouseSessions.query(
            "CALL sp_create_warehouse_session_remove(?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                wareHouseSessionsRemoveDTO.amount,
                wareHouseSessionsRemoveDTO.discount_percent,
                wareHouseSessionsRemoveDTO.vat,
                wareHouseSessionsRemoveDTO.material_id,
                wareHouseSessionsRemoveDTO.warehouse_session_status,
                wareHouseSessionsRemoveDTO.discount_type,
                wareHouseSessionsRemoveDTO.description,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(wareHouseSessionRemoved);
        let data: WareHouseSessions = new StoreProcedureResult<WareHouseSessions>().getResultDetail(wareHouseSessionRemoved);
        return data;
    }

    async spCreateWarehouseSessionReturn(
        user: Users,
        wareHouseSessionsRemoveDTO: WareHouseSessionsRemoveDTO
    ): Promise<WareHouseSessions> {

        let wareHouseSessionReturn: WareHouseSessions = await this.wareHouseSessions.query(
            "CALL sp_create_warehouse_session_return(?,?,?,?,?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                wareHouseSessionsRemoveDTO.amount,
                wareHouseSessionsRemoveDTO.discount_percent,
                wareHouseSessionsRemoveDTO.vat,
                wareHouseSessionsRemoveDTO.material_id,
                wareHouseSessionsRemoveDTO.warehouse_session_status,
                wareHouseSessionsRemoveDTO.description,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(wareHouseSessionReturn);
        let data: WareHouseSessions = new StoreProcedureResult<WareHouseSessions>().getResultDetail(wareHouseSessionReturn);
        return data;
    }

    async spGetListWarehouseSessionByType(
        type: number
    ): Promise<WareHouseSessions[]> {

        let wareHouseSessions: WareHouseSessions[] = await this.wareHouseSessions.query(
            "CALL sp_get_list_warehouse_session_by_type(?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                type,
            ]
        )
        ExceptionStoreProcedure.validate(wareHouseSessions);
        let data: WareHouseSessions[] = new StoreProcedureResult<WareHouseSessions[]>().getResultDetail(wareHouseSessions);
        return data;
    }

}
