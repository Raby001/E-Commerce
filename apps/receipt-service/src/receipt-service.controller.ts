import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateReceiptsDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { ApiKeyGuard } from './common/api-key.guard';
import { ReceiptsService } from './receipt-service.service';

@UseGuards(ApiKeyGuard)
@Controller('receipts')
export class ReceiptsController {
    constructor(private readonly receiptsService: ReceiptsService){}

    @Get()
    findAll(){
        return this.receiptsService.findAll();
    }

    @Get("/:id")
    findOne(@Param("id") receiptId: string){
        return this.receiptsService.findOne(receiptId);
    }
    
    @Post()
    create(@Body() receiptDetail: CreateReceiptsDto){
        return this.receiptsService.create(receiptDetail);
    }

    @Patch("/:id")
    update(@Param("id") id: string, @Body() UpdateReceipts: UpdateReceiptDto){
        return this.receiptsService.updateReceipt(id, UpdateReceipts);
    }

    @Delete("/:id")
    remove(@Param("id") id: string){
        return this.receiptsService.removeReceipt(id)
    }

}
