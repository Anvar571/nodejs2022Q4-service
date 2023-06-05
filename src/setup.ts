import {INestApplication, ValidationPipe} from "@nestjs/common"; 

export function setupConfigs(app: INestApplication) {
    app.useGlobalPipes(new ValidationPipe())
}