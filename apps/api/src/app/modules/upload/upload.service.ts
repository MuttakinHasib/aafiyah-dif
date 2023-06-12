import { Injectable } from '@nestjs/common';
import { UploadInput } from './dto/upload.input';
import { Readable } from 'stream';
import toStream = require('buffer-to-stream');
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

@Injectable()
export class UploadService {
  async uploadSingleGraphql(
    args: UploadInput
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    const { createReadStream } = (await args.file) as any;
    const buffer = await this.streamToBuffer(createReadStream());
    return await this.cloudinary(buffer);
  }

  async streamToBuffer(stream: Readable): Promise<Buffer> {
    const buffer: Uint8Array[] = [];

    return new Promise((resolve, reject) =>
      stream
        .on('error', (error) => reject(error))
        .on('data', (data) => buffer.push(data))
        .on('end', () => resolve(Buffer.concat(buffer)))
    );
  }

  async cloudinary(
    buffer: Buffer,
    folder = ''
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return await new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        { folder: 'aafiyah/' + folder },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      toStream(buffer).pipe(upload);
    });
  }
}
