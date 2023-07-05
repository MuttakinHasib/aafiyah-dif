import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UploadService } from './upload.service';
import { Upload } from './entities/upload.entity';
import { UploadInput, UploadResponse } from './dto/upload.input';

@Resolver(() => Upload)
export class UploadResolver {
  constructor(private readonly uploadService: UploadService) {}

  @Mutation(() => UploadResponse)
  async uploadSingleFile(@Args() uploadInput: UploadInput) {
    return await this.uploadService.uploadSingleGraphql(uploadInput);
  }
}
