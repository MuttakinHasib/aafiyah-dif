import { GraphQLUpload, Upload } from 'graphql-upload-minimal';
import { Field, ObjectType, ArgsType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@ArgsType()
export class UploadInput {
  // @Field({ nullable: true })
  // @IsString()
  // @IsOptional()
  // folder = '';

  @Field(() => GraphQLUpload)
  file!: Promise<Upload>;
}

@ObjectType()
export class UploadResponse {
  @Field()
  public_id: string;

  @Field()
  version: number;

  @Field()
  signature: string;

  @Field()
  width: number;

  @Field()
  height: number;

  @Field()
  format: string;

  @Field()
  resource_type: 'image' | 'video' | 'raw' | 'auto';

  @Field()
  created_at: string;

  @Field(() => [String])
  tags: string[];

  @Field()
  pages: number;

  @Field()
  bytes: number;

  @Field()
  type: string;

  @Field()
  etag: string;

  @Field()
  placeholder: boolean;

  @Field()
  url: string;

  @Field()
  secure_url: string;

  @Field()
  access_mode: string;

  @Field()
  original_filename: string;
}
