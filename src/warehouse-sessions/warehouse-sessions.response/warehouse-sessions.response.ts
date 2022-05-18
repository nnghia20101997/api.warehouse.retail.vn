import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { WareHouseSessions } from "../warehouse-sessions.entity/warehouse-sessions.entity";

export class WareHouseSessionsDetailResponse {

    id: number;

    user_id: number;

    code: string;

    amount: number;

    discount_percent: number;

    vat: number;

    vat_amount: number;

    discount_amount: number;

    total_amount: number;

    material_id: number;

    material_name: string;

    type: number;

    warehouse_session_status: number;

    addition_fee_id: number;

    receipt_number_no: number;

    discount_type: number;

    is_include_vat: number;

    description: string;

    updated_at: string;

    created_at: string;

    constructor(wareHouseSession?: WareHouseSessions) {
        this.id = wareHouseSession ? +wareHouseSession.id : 0;
        this.user_id = wareHouseSession ? +wareHouseSession.user_id : 0;
        this.code = wareHouseSession ? wareHouseSession.code : "";
        this.amount = wareHouseSession ? +wareHouseSession.amount : 0;
        this.discount_percent = wareHouseSession ? +wareHouseSession.discount_percent : 0;
        this.vat = wareHouseSession ? +wareHouseSession.vat : 0;
        this.discount_amount = wareHouseSession ? +wareHouseSession.discount_amount : 0;
        this.total_amount = wareHouseSession ? +wareHouseSession.total_amount : 0;
        this.material_id = wareHouseSession ? +wareHouseSession.material_id : 0;
        this.material_name = wareHouseSession ? wareHouseSession.material_name : "";
        this.type = wareHouseSession ? +wareHouseSession.type : 0;
        this.warehouse_session_status = wareHouseSession ? +wareHouseSession.warehouse_session_status : 0;
        this.addition_fee_id = wareHouseSession ? +wareHouseSession.addition_fee_id : 0;
        this.receipt_number_no = wareHouseSession ? +wareHouseSession.receipt_number_no : 0;
        this.discount_type = wareHouseSession ? +wareHouseSession.discount_type : 0;
        this.is_include_vat = wareHouseSession ? +wareHouseSession.is_include_vat : 0;
        this.description = wareHouseSession ? wareHouseSession.description : "";
        this.updated_at = wareHouseSession ? UtilsDate.formatDateTimeVNToString(wareHouseSession.updated_at) : "";
        this.created_at = wareHouseSession ? UtilsDate.formatDateTimeVNToString(wareHouseSession.created_at) : "";
    }

    public mapToList(data: WareHouseSessions[]) {
        let response: WareHouseSessionsDetailResponse[] = [];

        data.forEach(e => {
            response.push(new WareHouseSessionsDetailResponse(e));
        });

        return response;
    }
}