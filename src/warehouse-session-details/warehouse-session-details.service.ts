import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity/users.entity';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-proceduce-result.common/utils.store-proceduce-result.common';
import { Repository } from 'typeorm';
import { WareHouseSessionDetailExportDTO } from './warehouse-session-details.dto/warehouse-session-details.dto.export';
import { WareHouseSessionDetailRemoveDTO } from './warehouse-session-details.dto/warehouse-session-details.dto.remove';
import { WareHouseSessionDetailReturnDTO } from './warehouse-session-details.dto/warehouse-session-details.dto.return';
import { WareHouseSessionDetails } from './warehouse-session-details.entity/warehouse-session-details.entity';

@Injectable()
export class WarehouseSessionDetailService {
    @InjectRepository(WareHouseSessionDetails)
    private wareHouseSessionDetails: Repository<WareHouseSessionDetails>

    async spCreateWarehouseSessionDetailExport(
        user: Users,
        wareHouseSessionDetailExportDTO: WareHouseSessionDetailExportDTO
    ): Promise<WareHouseSessionDetails> {

        let wareHouseSessionDetailExport: WareHouseSessionDetails = await this.wareHouseSessionDetails.query(
            "CALL sp_create_warehouse_session_detail_export(?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                wareHouseSessionDetailExportDTO.warehouse_session_id,
                wareHouseSessionDetailExportDTO.category_id,
                wareHouseSessionDetailExportDTO.material_unit_id,
                wareHouseSessionDetailExportDTO.material_id,
                wareHouseSessionDetailExportDTO.warehouse_session_detail_status,
                wareHouseSessionDetailExportDTO.price,
                wareHouseSessionDetailExportDTO.quantity,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(wareHouseSessionDetailExport);
        let data: WareHouseSessionDetails = new StoreProcedureResult<WareHouseSessionDetails>().getResultDetail(wareHouseSessionDetailExport);
        return data;
    }

    async spCreateWarehouseSessionDetailImport(
        user: Users,
        wareHouseSessionDetailExportDTO: WareHouseSessionDetailExportDTO
    ): Promise<WareHouseSessionDetails> {

        let wareHouseSessionDetailImport: WareHouseSessionDetails = await this.wareHouseSessionDetails.query(
            "CALL sp_create_warehouse_session_detail_import(?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                wareHouseSessionDetailExportDTO.warehouse_session_id,
                wareHouseSessionDetailExportDTO.category_id,
                wareHouseSessionDetailExportDTO.material_unit_id,
                wareHouseSessionDetailExportDTO.material_id,
                wareHouseSessionDetailExportDTO.warehouse_session_detail_status,
                wareHouseSessionDetailExportDTO.price,
                wareHouseSessionDetailExportDTO.quantity,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(wareHouseSessionDetailImport);
        let data: WareHouseSessionDetails = new StoreProcedureResult<WareHouseSessionDetails>().getResultDetail(wareHouseSessionDetailImport);
        return data;
    }

    async spCreateWarehouseSessionDetailRemove(
        user: Users,
        wareHouseSessionDetailRemoveDTO: WareHouseSessionDetailRemoveDTO
    ): Promise<WareHouseSessionDetails> {

        let wareHouseSessionDetailRemove: WareHouseSessionDetails = await this.wareHouseSessionDetails.query(
            "CALL sp_create_warehouse_session_detail_remove(?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                wareHouseSessionDetailRemoveDTO.warehouse_session_id,
                wareHouseSessionDetailRemoveDTO.category_id,
                wareHouseSessionDetailRemoveDTO.material_unit_id,
                wareHouseSessionDetailRemoveDTO.material_id,
                wareHouseSessionDetailRemoveDTO.warehouse_session_detail_status,
                wareHouseSessionDetailRemoveDTO.price,
                wareHouseSessionDetailRemoveDTO.quantity,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(wareHouseSessionDetailRemove);
        let data: WareHouseSessionDetails = new StoreProcedureResult<WareHouseSessionDetails>().getResultDetail(wareHouseSessionDetailRemove);
        return data;
    }

    async spCreateWarehouseSessionDetailReturn(
        user: Users,
        wareHouseSessionDetailReturnDTO: WareHouseSessionDetailReturnDTO
    ): Promise<WareHouseSessionDetails> {

        let wareHouseSessionDetailReturn: WareHouseSessionDetails = await this.wareHouseSessionDetails.query(
            "CALL sp_create_warehouse_session_detail_return(?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                wareHouseSessionDetailReturnDTO.warehouse_session_id,
                wareHouseSessionDetailReturnDTO.category_id,
                wareHouseSessionDetailReturnDTO.material_unit_id,
                wareHouseSessionDetailReturnDTO.material_id,
                wareHouseSessionDetailReturnDTO.warehouse_session_detail_status,
                wareHouseSessionDetailReturnDTO.price,
                wareHouseSessionDetailReturnDTO.quantity,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(wareHouseSessionDetailReturn);
        let data: WareHouseSessionDetails = new StoreProcedureResult<WareHouseSessionDetails>().getResultDetail(wareHouseSessionDetailReturn);
        return data;
    }
}
