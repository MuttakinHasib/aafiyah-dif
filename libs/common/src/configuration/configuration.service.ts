import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private readonly configService: ConfigService) {}

  get POSTGRES_DB_URL() {
    return this.configService.get<string>('POSTGRES_DB_URL');
  }
}
