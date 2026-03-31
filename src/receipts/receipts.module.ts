import { Module } from "@nestjs/common";
import { ReceiptsController } from "./receipts.controller";
import { ReceiptsService } from "./receipts.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReceiptsEntity } from "./database/entities/Receipt.entity";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { NotificationsModule } from "src/notifications/notifications.module";
import { NotificationsService } from "src/notifications/notifications.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([ReceiptsEntity]),
        NotificationsModule
    ],
        
    controllers: [ReceiptsController],
    providers: [ReceiptsService]
})
export class ReceiptModule{}