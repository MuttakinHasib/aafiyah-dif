import {
  Field,
  GraphQLISODateTime,
  ID,
  InputType,
  ObjectType,
} from '@nestjs/graphql';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@InputType('CoreInputType', { isAbstract: true })
export class CoreEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => GraphQLISODateTime)
  updated_at: Date;
}
