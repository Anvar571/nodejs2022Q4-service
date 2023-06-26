import { Module } from '@nestjs/common';
import { ArtistsModule } from './artists/artists.module';
import { TracksModule } from './tracks/tracks.module';
import { AlbumsModule } from './albums/albums.module';
import { FavoritesModule } from './favorites/favorites.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { dbConfig } from './config/db.config';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('DATABASE'),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule, 
    ArtistsModule, 
    TracksModule, 
    AlbumsModule, 
    FavoritesModule,
    ConfigModule.forRoot({
      load: [ dbConfig],
    }), 
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
