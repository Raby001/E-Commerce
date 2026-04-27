import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './Entities/Product.entity';
import { CategoryService } from '../category/category.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService]
})
export class ProductModule {}
