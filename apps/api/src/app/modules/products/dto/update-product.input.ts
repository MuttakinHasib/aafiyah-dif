import { Product } from '../entities/product.entity';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(Product, InputType) {}
