
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { UploadInput } from './upload.input';

@InputType()
export class UpdateUploadInput extends PartialType(UploadInput) {
  @Field(() => Int)
  id: number;
}
