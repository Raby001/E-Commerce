import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './Entities/Product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepo: Repository<ProductEntity>,
    ) {}

    findAll() {
        return this.productRepo.find();
    }

    findOne(id: number) {
        return this.productRepo.findOneBy({ id });
    }

    create(data: { name: string; price: number; categoryId: number }) {
        const product = this.productRepo.create(data);
        return this.productRepo.save(product);
    }

    async update(
        id: number,
        data: { name?: string; price?: number; categoryId?: number },
    ) {
        await this.productRepo.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number) {
        const product = await this.findOne(id);
        if (!product) return null;

        await this.productRepo.delete(id);
        return product;
    }

}
