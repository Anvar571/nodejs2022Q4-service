import { Module } from '@nestjs/common';
import { ArtistsModule } from './artists/artists.module';
import { TracksModule } from './tracks/tracks.module';
import { AlbumsModule } from './albums/albums.module';
import { FavoritesModule } from './favorites/favorites.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ArtistsModule, TracksModule, AlbumsModule, FavoritesModule, UsersModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
