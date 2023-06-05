import { Injectable } from "@nestjs/common";
import { IArtist } from "./interface/artist.interface";


@Injectable()
export class ArtistService {
    private artists: Array<any> = []

    public async getAllArtist(): Promise<IArtist[]>{
        return
    }

    public async getOneArtist(id: string): Promise<IArtist> {
        return
    }

    public async createArtist(data: IArtist): Promise<IArtist> {
        return
    }


    public async updateArtist(id: string, data: IArtist): Promise<IArtist>{
        return
    }

    public async deleteArtist(id: string): Promise<string>{
        return
    }
}