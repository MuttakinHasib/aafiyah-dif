import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadResolver } from './upload.resolver';
import { CloudinaryProvider } from './cloudinary.provider';
import { CloudinaryModule } from 'nestjs-cloudinary';
import { ConfigurationService } from '@aafiyah/common';
import { UploadController } from './upload.controller';

@Module({
  imports: [
    CloudinaryModule.forRootAsync({
      // imports: [NestConfigModule],
      useFactory: (configurationService: ConfigurationService) => ({
        isGlobal: true,
        cloud_name: configurationService.CLOUDINARY_CLOUD_NAME,
        api_key: configurationService.CLOUDINARY_API_KEY,
        api_secret: configurationService.CLOUDINARY_API_SECRET,
      }),
      inject: [ConfigurationService],
    }),
  ],
  controllers: [UploadController],
  providers: [CloudinaryProvider, UploadResolver, UploadService],
  exports: [CloudinaryProvider],
})
export class UploadModule {}
