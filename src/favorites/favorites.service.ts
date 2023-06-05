import { Injectable } from "@nestjs/common";
import { IFavorites } from "./interface/fav.interface";


@Injectable()
export class FavService {
    private favorites = {} as IFavorites;

    public async getAllFavs() {
        return this.favorites
    }

    public async addFavoriteArtist(id: string): Promise<string>{
        
        this.favorites.artists.push(id);
        
        return "Added succesfully"
    }

    public async deleteArtist(id: string): Promise<string> {
        // const findArtist = 

        return "Deleted succesfully"
    }

    public async addFavoriteTrack(id: string): Promise<string> {
        this.favorites.tracks.push(id);

        return "Added succesfully"
    }

    public async deleteTrack(id: string): Promise<string> {
        // const findArtist = 

        return "Deleted succesfully"
    }

    public async addFavoriteAlbom(id: string): Promise<string> {
        this.favorites.albums.push(id);

        return "Added succesfully"

    }

    public async deleteAlbom(id: string): Promise<string> {
        // const findArtist = 

        return "Deleted succesfully"
    }
}