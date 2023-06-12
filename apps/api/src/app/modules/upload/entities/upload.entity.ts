import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Upload {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
