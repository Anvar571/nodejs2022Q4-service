import { Module } from '@nestjs/common';
import { ArtistsModule } from './artists/artists.module';
import { TracksModule } from './tracks/tracks.module';
import { AlbumsModule } from './albums/albums.module';
import { FavoritesModule } from './favorites/favorites.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UsersModule, 
    ArtistsModule, 
    TracksModule, 
    AlbumsModule, 
    FavoritesModule, 
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
