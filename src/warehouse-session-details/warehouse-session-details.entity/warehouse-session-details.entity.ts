import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: "warehouse-sessions-details"
})

export class WareHouseSessionDetails extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 })
    user_id: number;

    @Column({ default: 0 })
    warehouse_session_id: number;

    @Column({ default: 0 })
    category_id: number;

    @Column({ default: "" })
    category_name: string;

    @Column({ default: 0 })
    material_unit_id: number;

    @Column({ default: 0 })
    material_unit_name: string;

    @Column({ default: 0 })
    material_id: number;

    @Column({ default: "" })
    material_name: string;

    @Column({ default: 0 })
    price: number;

    @Column({ default: 0 })
    quantity: number;

    @Column({ default: 0 })
    status: number;

    @Column({ default: 0 })
    total_amount: number;

    @Column({ default: 0 })
    warehouse_session_detail_status: number;

    @CreateDateColumn()
    updated_at: Date;

    @UpdateDateColumn()
    created_at: Date;
}