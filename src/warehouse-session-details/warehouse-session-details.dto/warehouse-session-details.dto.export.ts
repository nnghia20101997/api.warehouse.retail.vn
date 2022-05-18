import { IsInt, IsString } from "class-validator";

export class WareHouseSessionDetailExportDTO {


    @IsInt()
    warehouse_session_id: number;

    @IsInt()
    category_id: number;

    @IsInt()
    material_unit_id: number;

    @IsInt()
    material_id: number;

    @IsInt()
    warehouse_session_detail_status: number;

    @IsInt()
    price: number;

    @IsInt()
    quantity: number;

}