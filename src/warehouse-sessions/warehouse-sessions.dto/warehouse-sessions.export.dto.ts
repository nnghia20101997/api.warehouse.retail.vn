import { IsInt, IsString } from "class-validator";

export class WareHouseSessionsExportDTO {


    @IsInt()
    amount: number;

    @IsInt()
    discount_percent: number;

    @IsInt()
    vat: number;

    @IsInt()
    material_id: number;


    @IsInt()
    warehouse_session_status: number;


    @IsInt()
    discount_type: number;

    @IsString()
    description: string;

}