import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadResolver } from './upload.resolver';
import { CloudinaryProvider } from './cloudinary.provider';

@Module({
  providers: [CloudinaryProvider, UploadResolver, UploadService],
  exports: [CloudinaryProvider],
})
export class UploadModule {}
