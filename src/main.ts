import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupConfigs } from './setup';
import { parse } from "yamljs";
import * as fs from "fs";
import * as swaggerUi from "swagger-ui-express";

async function bootstrap() {
  try {
    const port = process.env.PORT || 4000;
    const app = await NestFactory.create(AppModule);

    setupConfigs(app);

    const swaggerDocument = parse(fs.readFileSync("./doc/api.yaml", "utf-8"));

    app.use(
      "/",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );

    await app.listen(port, () => {
      console.log(`Server running on ${port } port`);
    });

  } catch (error) {
    console.log(error);
  }
}

bootstrap();
