import { IsInt, IsString } from "class-validator";

export class WareHouseSessionsReturnDTO {

    @IsInt()
    user_id: number;

    @IsString()
    code: string;

    @IsInt()
    amount: number;

    @IsInt()
    discount_percent: number;

    @IsInt()
    vat: number;

    @IsInt()
    material_id: number;

    @IsString()
    material_name: string;

    @IsInt()
    type: number;

    @IsInt()
    warehouse_session_status: number;

    @IsInt()
    addition_fee_id: number;

    @IsInt()
    receipt_number_no: number;

    @IsInt()
    discount_type: number;

    @IsInt()
    is_include_vat: number;

    @IsString()
    description: string;

}