import { Inject, Injectable } from '@nestjs/common';
import { CategoryEntity } from './Entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(CategoryEntity) private readonly categoryRepo: Repository<CategoryEntity>){}
    
    findAll() {
        return this.categoryRepo.find();
    }

    findOne(id: number) {
        return this.categoryRepo.findOneBy({ id });
    }

    create(data: { name: string }) {
        const category = this.categoryRepo.create(data); 
        return this.categoryRepo.save(category);
    }

    async update(id: number, data: { name?: string }) {
        await this.categoryRepo.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number) {
        const category = await this.findOne(id);
        if (!category) return null;

        await this.categoryRepo.delete(id);
        return category;
    }
}
