import { InputType, OmitType } from '@nestjs/graphql';
import { Product } from '../entities/product.entity';

@InputType()
export class CreateProductInput extends OmitType(
  Product,
  ['created_at', 'updated_at', 'id'],
  InputType
) {}
