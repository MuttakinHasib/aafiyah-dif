import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor (@InjectRepository(Product) private readonly productRepository: Repository<Product>){}

  async create(createProductInput: CreateProductInput) {
    const product =  this.productRepository.create(createProductInput)
    return await this.productRepository.save(product);
  }

  async findAll() {
    return await this.productRepository.find({});
  }

  async findOne(id: string) {
    return await this.productRepository.findOne({where:{id}});
  }

  async update(updateProductInput: UpdateProductInput) {
    await this.productRepository.save(updateProductInput);
    return "Product has been updated successfully!";
  }

  async remove(id: string) {
    await this.productRepository.delete(id);

    return "Product has been deleted!";
  }
}
