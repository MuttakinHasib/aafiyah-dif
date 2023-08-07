import { Product } from '../entities/product.entity';
import { InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(OmitType(Product,['id']), InputType) {}
