import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupConfigs } from './setup';
import { SwaggerModule } from "@nestjs/swagger";
import { YAML } from "yamljs";

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    setupConfigs(app);

    const swaggerDocum = YAML.load("../doc/api.yaml");

    const document = SwaggerModule.createDocument(app, swaggerDocum);
    SwaggerModule.setup('/', app, document);

    await app.listen(4000);
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
