import { CoreEntity } from '@aafiyah/common';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { Column } from 'typeorm';

@ObjectType()
export class Product extends CoreEntity {
  @Field()
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @Column()
  @IsNotEmpty()
  @IsString()
  description: string;

  @Field(() => Int)
  @Column()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  @IsOptional()
  @IsNumber()
  discount?: number;

  @Field(() => Int)
  @Column({ default: 0 })
  @IsNotEmpty()
  @IsNumber()
  countInStock: number;

  @Field()
  @Column({ type: 'simple-array' })
  @IsArray()
  @IsUrl({}, { each: true })
  images: string[];

  @Field()
  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  sku: string;

  @Field()
  @Column({ type: 'simple-array' })
  @IsArray()
  tags: string[];

  @Field(() => Boolean)
  @Column({ type: 'boolean', default: false })
  @IsBoolean()
  featured: boolean;
}
