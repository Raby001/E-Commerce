import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category")
export class CategoryEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    description?: string;

}