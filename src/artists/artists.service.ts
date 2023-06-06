import { BadRequestException, Injectable } from "@nestjs/common";
import { IArtist } from "./interface/artist.interface";
import { validate } from "uuid";
import {v4 as uuidv4} from "uuid";


@Injectable()
export class ArtistService {
    private artists: Array<any> = []

    public async getAllArtist(): Promise<IArtist[]>{
        return this.artists
    }

    public async getOneArtist(id: string): Promise<IArtist> {
        if (!validate(id)) throw new BadRequestException("Bad request. artistId is invalid (not uuid)")

        const artist = this.artists.find(artist => artist.id === id);

        if (!artist) throw new BadRequestException("Artist not found")

        return artist
    }

    public async createArtist(data: IArtist): Promise<IArtist> {
        const newArtist = {
            id: uuidv4(),
            name: data.name,
            grammy: data.grammy
        }

        this.artists.push(newArtist);
        return newArtist
    }


    public async updateArtist(id: string, data: IArtist): Promise<IArtist>{
        if (!validate(id)) throw new BadRequestException("Bad request. artistId is invalid (not uuid)")

        const artist = this.artists.find(artist => artist.id === id);

        if (!artist) throw new BadRequestException("Artist not found")

        this.artists.map(item => item.id === id ? {...item, ...data} : item)

        return data
    }

    public async deleteArtist(id: string): Promise<string>{
        if (!validate(id)) throw new BadRequestException("Bad request. artistId is invalid (not uuid)")

        const artist = this.artists.findIndex(artist=> artist.id == id);
        
        if (artist == -1) throw new BadRequestException("Artist not found");

        this.artists.splice(artist, 1);

        return "The track has been deleted"
    }
}