import {INestApplication, ValidationPipe} from "@nestjs/common"; 
import "dotenv/config";

export function setupConfigs(app: INestApplication) {
    app.useGlobalPipes(new ValidationPipe())
}