import { Module } from '@nestjs/common';
import { FavController } from './favorites.controller';
import { FavService } from './favorites.service';
import { TracksModule } from '../tracks/tracks.module';
import { AlbumsModule } from '../albums/albums.module';
import { ArtistsModule } from '../artists/artists.module';

@Module({
    imports: [TracksModule, AlbumsModule, ArtistsModule],
    controllers: [FavController],
    providers: [FavService]
})

export class FavoritesModule {}
