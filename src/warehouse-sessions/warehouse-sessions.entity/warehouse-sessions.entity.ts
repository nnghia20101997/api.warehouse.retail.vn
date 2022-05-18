import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: "warehouse-sessions"
})

export class WareHouseSessions extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 })
    user_id: number;

    @Column({ default: "" })
    code: string;

    @Column({ default: 0 })
    amount: number;

    @Column({ default: 0 })
    discount_percent: number;

    @Column({ default: 0 })
    vat: number;

    @Column({ default: 0 })
    vat_amount: number;

    @Column({ default: 0 })
    discount_amount: number;

    @Column({ default: 0 })
    total_amount: number;

    @Column({ default: 0 })
    material_id: number;

    @Column({ default: "" })
    material_name: string;

    @Column({ default: 0 })
    type: number;

    @Column({ default: 0 })
    warehouse_session_status: number;

    @Column({ default: 0 })
    addition_fee_id: number;

    @Column({ default: 0 })
    receipt_number_no: number;

    @Column({ default: 0 })
    discount_type: number;

    @Column({ default: 0 })
    is_include_vat: number;

    @Column({ default: "" })
    description: string;

    @CreateDateColumn()
    updated_at: Date;

    @UpdateDateColumn()
    created_at: Date;
}