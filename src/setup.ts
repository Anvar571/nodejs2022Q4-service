import { ClassSerializerInterceptor, INestApplication, ValidationPipe } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

export function setupConfigs(app: INestApplication) {
    app.enableCors({ origin: '*' });

    app.useGlobalInterceptors(
        new ClassSerializerInterceptor(app.get(Reflector), {
            excludeExtraneousValues: true,
        }),
    );

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidUnknownValues: true,
        }),
    );
}