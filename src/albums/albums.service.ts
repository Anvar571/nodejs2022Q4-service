import { Injectable } from "@nestjs/common";
import { IAlbom } from "./interface/album.interface";


@Injectable()
export class AlbomService {
    private albom: Array<any> = [];

    public async getAllAlbom(): Promise<IAlbom[]>{
        return
    }

    public async getOneAlbom(id: string): Promise<IAlbom>{
        return
    }

    public async createAlbom(data: IAlbom): Promise<IAlbom>{
        return
    }

    public async updateAlbom(id: string, data: IAlbom): Promise<IAlbom>{
        return
    }

    public async deleteAlbom(id: string): Promise<string>{
        return 
    }
    
}