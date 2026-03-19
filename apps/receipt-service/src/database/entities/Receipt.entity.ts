import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReceiptsEntity{
    @PrimaryGeneratedColumn("uuid")
    receiptId: string

    @Column()
    issuedAt: Date

    @Column("numeric", { precision: 10, scale: 2 })
    price: number;

    @Column()
    name: string
}