import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './common/validation.pipe';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import * as Sentry from "@sentry/node"
import { Integrations } from "@sentry/tracing";
import { HttpExceptionFilter } from './common/rest/http-exception.filter';
import { LoggingInterceptor } from './common/rest/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // REST Global configurations
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  app.use(compression());

  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  
    // Alternatively, use `process.env.npm_package_version` for a dynamic release version
    // if your build tool supports it.
    release: "domain-driver-desing@0.0.1",
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  
  });

  Sentry.Handlers.requestHandler();

  app.use(
    rateLimit({
      windowMs: 1000 * 60 * 60,
      max: 1000, // 1000 requests por windowMs
      message:
        '⚠️  Too many request created from this IP, please try again after an hour',
    }),
  );

  // The error handler must be before any other error middleware
  Sentry.Handlers.errorHandler();

  await app.listen(3000);
}
bootstrap();
