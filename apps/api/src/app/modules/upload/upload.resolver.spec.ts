import { Test, TestingModule } from '@nestjs/testing';
import { UploadResolver } from './upload.resolver';
import { UploadService } from './upload.service';

describe('UploadResolver', () => {
  let resolver: UploadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadResolver, UploadService],
    }).compile();

    resolver = module.get<UploadResolver>(UploadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
