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

  update(id: string, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
