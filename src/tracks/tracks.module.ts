import { Module } from '@nestjs/common';
import { TrackController } from './tracks.controller';
import { TrackService } from './tracks.service';

@Module({
    controllers: [TrackController],
    providers: [TrackService],
    exports: [TrackService]
})
export class TracksModule {}
