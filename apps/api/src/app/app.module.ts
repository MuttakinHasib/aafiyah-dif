import { Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { ConfigurationModule, ConfigurationService } from '@aafiyah/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { UploadModule } from './modules/upload/upload.module';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigurationModule,
    MorganModule,
    TypeOrmModule.forRootAsync({
      useFactory: async (configurationService: ConfigurationService) => ({
        type: 'postgres',
        url: configurationService.POSTGRES_DB_URL,
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigurationService],
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: async () => ({
        autoSchemaFile: join(process.cwd(), 'apps/api/src/graphql/schema.gql'),
        sortSchema: true,
        playground: {
          settings: {
            'request.credentials': 'include',
          },
        },
        context: ({ req, res }) => ({ req, res }),
        // cors: {
        //   credentials: true,
        //   origin: [configurationService.WEB_URL],
        // },
      }),
    }),
    UsersModule,
    AuthModule,
    ProductsModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule {}
