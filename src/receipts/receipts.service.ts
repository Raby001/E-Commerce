import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { ReceiptsEntity } from "./database/entities/Receipt.entity";
import { CreateReceiptsDto } from "./dto/create-receipt.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateReceiptDto } from "./dto/update-receipt.dto";
import { NotificationsService } from "src/notifications/notifications.service";


@Injectable()
export class ReceiptsService{
    constructor(
        @InjectRepository(ReceiptsEntity) private readonly receiptsRepo: Repository<ReceiptsEntity>,
        private readonly notifications: NotificationsService,
    ){}

    async findAll(){
        return this.receiptsRepo.find({order:{
            issuedAt: 'desc'
        }});
    }

    async findOne(receiptId: string){
        const receipt = await this.receiptsRepo.findOne({ where: {receiptId}})
        if(!receipt){
            throw new NotFoundException({'message':`There is no item with the id${receiptId}`})
        }
        return receipt;
    }
    
    async create(dto: CreateReceiptsDto){
        const createReceipt = this.receiptsRepo.create({
            issuedAt: new Date(dto.issuedAt),
            name: dto.name,
            price: dto.price
        })

        const saved = await this.receiptsRepo.save(createReceipt);

        this.notifications.notify('receipt_created',{
            receiptId: saved.receiptId,
            price: saved.price,
        })

        return saved;
    }

    async updateReceipt(Id: string, dto: UpdateReceiptDto){
        const receiptDetail = await this.receiptsRepo.findOne({where: {receiptId: Id}})
        if(!receiptDetail){
            throw new NotFoundException({
                "message":`There no Receipt Id = ${Id}.`
            })
        }
        
        if (dto.issuedAt !== undefined) {
            receiptDetail.issuedAt = new Date(dto.issuedAt);
        }

        if (dto.name !== undefined) {
            receiptDetail.name = dto.name;
        }

        if (dto.price !== undefined) {
            receiptDetail.price = dto.price;
        }

        return this.receiptsRepo.save(receiptDetail);

    }

    async removeReceipt(id: string){
        const receiptDetail = await this.receiptsRepo.findOne({where: {receiptId: id}})
        if(!receiptDetail){
            throw new NotFoundException({
                "message":`There no Receipt Id = ${id}.`
            })
        }
        await this.receiptsRepo.remove(receiptDetail)
        return {deleted: true, id}
        

    }

}