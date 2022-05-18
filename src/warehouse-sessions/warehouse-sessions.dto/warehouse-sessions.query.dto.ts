import { IsInt } from "class-validator";

export class WareHouseSessionsQueryDTO {
    @IsInt()
    type: number;
}