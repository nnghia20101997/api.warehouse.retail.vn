import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { WareHouseSessionDetails } from "../warehouse-session-details.entity/warehouse-session-details.entity";

export class WareHouseSessionDetailsResponse {

    id: number;

    user_id: number;

    warehouse_session_id: number;

    category_id: number;

    category_name: string;

    material_unit_id: number;

    material_unit_name: string;

    material_id: number;

    material_name: string;

    price: number;

    quantity: number;

    status: number;

    total_amount: number;

    warehouse_session_detail_status: number;

    updated_at: string;

    created_at: string;

    constructor(wareHouseSessionDetail?: WareHouseSessionDetails) {
        this.id = wareHouseSessionDetail ? +wareHouseSessionDetail.id : 0;
        this.user_id = wareHouseSessionDetail ? +wareHouseSessionDetail.user_id : 0;
        this.warehouse_session_id = wareHouseSessionDetail ? +wareHouseSessionDetail.warehouse_session_id : 0;
        this.category_id = wareHouseSessionDetail ? +wareHouseSessionDetail.category_id : 0;
        this.category_name = wareHouseSessionDetail ? wareHouseSessionDetail.category_name : "";
        this.material_unit_id = wareHouseSessionDetail ? +wareHouseSessionDetail.material_unit_id : 0;
        this.material_unit_name = wareHouseSessionDetail ? wareHouseSessionDetail.material_unit_name : "";
        this.material_id = wareHouseSessionDetail ? +wareHouseSessionDetail.material_id : 0;
        this.material_name = wareHouseSessionDetail ? wareHouseSessionDetail.material_name : "";
        this.price = wareHouseSessionDetail ? +wareHouseSessionDetail.price : 0;
        this.quantity = wareHouseSessionDetail ? +wareHouseSessionDetail.quantity : 0;
        this.status = wareHouseSessionDetail ? +wareHouseSessionDetail.status : 0;
        this.total_amount = wareHouseSessionDetail ? +wareHouseSessionDetail.total_amount : 0;
        this.warehouse_session_detail_status = wareHouseSessionDetail ? +wareHouseSessionDetail.warehouse_session_detail_status : 0;
        this.updated_at = wareHouseSessionDetail ? UtilsDate.formatDateTimeVNToString(wareHouseSessionDetail.updated_at) : "";
        this.created_at = wareHouseSessionDetail ? UtilsDate.formatDateTimeVNToString(wareHouseSessionDetail.created_at) : "";
    }

    public mapToList(data: WareHouseSessionDetails[]) {
        let response: WareHouseSessionDetailsResponse[] = [];

        data.forEach(e => {
            response.push(new WareHouseSessionDetailsResponse(e));
        });

        return response;
    }
}