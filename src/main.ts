import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger"
import { setupConfigs } from './setup';
import { parse } from "yamljs";
import * as fs from "fs";
import * as swaggerUi from "swagger-ui-express";

async function bootstrap() {
  try {
    const port = process.env.PORT || 4000;
    const app = await NestFactory.create(AppModule);

    setupConfigs(app);

    const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle("Home Library Service")
      .setDescription("Home music library service")
      .setVersion("1.0.0")
      .build();

    const document = SwaggerModule.createDocument(app, config);
    
    SwaggerModule.setup("/", app, document);
    // const swaggerDocument = parse(fs.readFileSync("./doc/api.yaml", "utf-8"));

    // app.use(
    //   "/",
    //   swaggerUi.serve,
    //   swaggerUi.setup(swaggerDocument)
    // );

    await app.listen(port, () => {
      console.log(`Server running ----> ${port } port`);
    });

  } catch (error) {
    console.log(error);
  }
}

bootstrap();
