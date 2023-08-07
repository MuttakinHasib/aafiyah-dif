import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput
  ) {
    return await this.productsService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  async findAll() {
    return await this.productsService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  async findOne(@Args('id') id: string) {
    return await this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput
  ) {
    return await this.productsService.update(updateProductInput);
  }

  @Mutation(() => Product)
  async removeProduct(@Args('id') id: string) {
    return await this.productsService.remove(id);
  }
}
