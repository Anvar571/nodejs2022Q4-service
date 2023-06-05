import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { FavService } from "./favorites.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Favorites")
@Controller("favs")
export class FavController {
    constructor(private readonly favService: FavService){}

    @Get()
    public async getAllFavs(){
        return await this.favService.getAllFavs();
    }

    @Post("track/:id")
    public async addTrack(@Param("id") id: string){
        return this.favService.addFavoriteTrack(id);
    }

    @Delete("track/:id")
    public async deleteTrack(@Param("id") id: string){
        return this.favService.deleteTrack(id);
    }
    
    @Post("albom/:id")
    public async addAlbom(@Param("id") id: string){
        return this.favService.addFavoriteAlbom(id);
    }

    @Delete("album/:id")
    public async deleteAlbum(@Param("id") id: string){
        return this.favService.deleteAlbom(id);
    }
    
    @Post("artist/:id")
    public async addArtist(@Param("id") id: string){
        return this.favService.addFavoriteArtist(id);
    }

    @Delete("artist/:id")
    public async deleteArtist(@Param("id") id: string){
        return this.favService.deleteArtist(id);
    }

}