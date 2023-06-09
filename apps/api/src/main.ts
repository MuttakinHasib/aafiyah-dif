import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import passport from 'passport';
import session from 'express-session';
import PostgresStore from 'connect-pg-simple';
import  cookieParser from 'cookie-parser';
import { AppModule } from './app/app.module';
import { ConfigurationService } from '@aafiyah/common';
import 'colors';
const pgSession = PostgresStore(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configurationService =
    app.get<ConfigurationService>(ConfigurationService);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.enableCors({
    credentials: true,
    origin: [configurationService.WEB_URL],
  });
  app.use(cookieParser())
  app.use(
    session({
      secret: configurationService.SESSION_SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
      },
      store: new pgSession({
        conString: process.env.POSTGRES_DB_URL,
        createTableIfMissing: true,
      }),
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Alhamdulillah! Application is running on: ${await app.getUrl()}/graphql`
      .bgCyan.black
  );
}

bootstrap();
