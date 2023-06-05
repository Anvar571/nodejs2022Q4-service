import { BadRequestException, Injectable } from '@nestjs/common';
import {v4 as uuidv4, validate} from "uuid";
import { ITrack } from './interface/track.interface';

@Injectable()
export class TrackService {
    private tracks: Array<any> = [];

    public async createTrack(data: ITrack): Promise<ITrack> {
        const newTrack = {
            id: uuidv4(),
            name: data.name,
            duration: data.duration,
            artistId: data.artistId,
            albumId: data.albumId,
        };

        this.tracks.push(newTrack);
        return newTrack;
    }

    public async getAllTrack(): Promise<ITrack[]> {
        return this.tracks
    }

    public async getByIdTrack(id: string): Promise<ITrack> {
        
        if (!validate(id) ) throw new BadRequestException("Bad request. trackId is invalid (not uuid)")
        
        const track = this.tracks.find((track) => track.id === id) as ITrack;

        if (!track) throw new BadRequestException("Track not found!")

        return track
    }

    public async updateTrack(id: string, data: ITrack): Promise<ITrack> {
        if (!validate(id)) throw new BadRequestException("Bad request. trackId is invalid (not uuid)")

        const track = this.tracks.find(track => track.id == id);

        if (!track) throw new BadRequestException("Track not found!")

        const res =  this.tracks.map(
            (item) => item.id == id ? { ...item, ...data } : item
        ) 

        return
    }

    public async deleteTrack(id: string): Promise<string> {
        
        if (!validate(id)) throw new BadRequestException("Bad request. trackId is invalid (not uuid)")

        const track = this.tracks.findIndex(user => user.id == id);
        if (!track) throw new BadRequestException("track not found!")

        this.tracks.splice(track, 1);

        return "The track has been deleted";
    }   
}