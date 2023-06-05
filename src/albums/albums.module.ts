import { Module } from '@nestjs/common';
import { AlbomController } from './albums.controller';
import { AlbomService } from './albums.service';

@Module({
    controllers: [AlbomController],
    providers: [AlbomService]
})
export class AlbumsModule {}
