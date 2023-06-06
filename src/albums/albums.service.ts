import { BadRequestException, Injectable } from "@nestjs/common";
import { IAlbom } from "./interface/album.interface";
import { v4 as uuidv4, validate } from "uuid";


@Injectable()
export class AlbomService {
    private albom: Array<any> = [];

    public async getAllAlbom(): Promise<IAlbom[]>{
        return this.albom
    }

    public async getOneAlbom(id: string): Promise<IAlbom>{
        if (!validate(id)) throw new BadRequestException("Bad request. albomId is invalid (not uuid)")

        const albom = this.albom.find(albom => albom.id === id);

        if (!albom) throw new BadRequestException("Albom not found")

        return albom
    }

    public async createAlbom(data: IAlbom): Promise<IAlbom>{
        const newAlbum = {
            id: uuidv4(),
            name: data.name,
            year: data.year,
            artistId: data.artistId
        }

        this.albom.push(newAlbum);
        return newAlbum
    }

    public async updateAlbom(id: string, data: IAlbom): Promise<IAlbom>{
        if (!validate(id)) throw new BadRequestException("Bad request. albomId is invalid (not uuid)")

        const artist = this.albom.find(albom => albom.id === id);

        if (!artist) throw new BadRequestException("Albom not found")

        this.albom.map(item => item.id === id ? {...item, ...data} : item)

        return
    }

    public async deleteAlbom(id: string): Promise<string>{
        if (!validate(id)) throw new BadRequestException("Bad request. albomId is invalid (not uuid)")

        const albom = this.albom.findIndex(albom=> albom.id == id);

        if (!albom) throw new BadRequestException("Albom not found");

        this.albom.splice(albom, 1);

        return "The albom has been deleted" 
    }
    
}