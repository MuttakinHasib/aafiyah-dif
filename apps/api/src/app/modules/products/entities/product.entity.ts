import { CoreEntity } from '@aafiyah/common';
import { ObjectType, Field, Int,  } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Column } from 'typeorm';

@ObjectType()
export class Product extends CoreEntity {
  @Field()
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string

  @Field()
  @Column()
  @IsNotEmpty()
  @IsString()
  description: string

  @Field(() => Int)
  @Column()
  @IsNotEmpty()
  @IsNumber()
  price: number

  @Field(() => Int)
  @Column({default: 0})
  @IsNotEmpty()
  @IsNumber()
  countInStock: number

}
