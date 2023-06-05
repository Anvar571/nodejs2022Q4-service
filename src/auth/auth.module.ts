import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { jwtConst } from './constants';

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            secret: jwtConst.secret,
            signOptions: { expiresIn: '1h' },
          })
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})

export class AuthModule {}
