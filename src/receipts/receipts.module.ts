import { Module } from "@nestjs/common";
import { ReceiptsController } from "./receipts.controller";
import { ReceiptsService } from "./receipts.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReceiptsEntity } from "./database/entities/Receipt.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ReceiptsEntity])],
    controllers: [ReceiptsController],
    providers: [ReceiptsService]
})
export class ReceiptModule{

}