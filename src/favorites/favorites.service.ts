import { BadRequestException, Injectable } from "@nestjs/common";
import { IFavorites } from "./interface/fav.interface";
import { TrackService } from "../tracks/tracks.service";
import { AlbomService } from "src/albums/albums.service";
import { ArtistService } from "src/artists/artists.service";
import { validate } from "uuid";


@Injectable()
export class FavService {
    private favorites = {} as IFavorites;
    constructor(
        private readonly trackService: TrackService,
        private readonly albomService: AlbomService,
        private readonly artistService: ArtistService
    ){}

    public async getAllFavs() {
        return this.favorites
    }

    public async addFavoriteArtist(id: string): Promise<string>{
        if (!validate(id)) throw new BadRequestException('Bad. artistId is invalid (not uuid)')
        
        const artist = await this.artistService.getOneArtist(id);

        if (!artist) throw new BadRequestException("Artist not found")

        this.favorites.artists.push(artist);
        
        return "Added succesfully"
    }

    public async deleteArtist(id: string): Promise<string> {
        if (!validate(id)) throw new BadRequestException('Bad. artistId is invalid (not uuid)')

        const artist = await this.artistService.getOneArtist(id);

        if (!artist) throw new BadRequestException("Artist not found")

        const artInd = this.favorites.artists.findIndex(atrist => artist.id == id);

        if (artInd == -1) throw new BadRequestException("Favorites not found artist")

        this.favorites.artists.splice(artInd, 1);

        return "Deleted succesfully"
    }

    public async addFavoriteTrack(id: string): Promise<string> {
        if (!validate(id)) throw new BadRequestException('Bad. artistId is invalid (not uuid)')

        const track = await this.trackService.getByIdTrack(id);

        if (!track) throw new BadRequestException("Artist not found")

        this.favorites.tracks.push(track);

        return "Added succesfully"
    }

    public async deleteTrack(id: string): Promise<string> {
        if (!validate(id)) throw new BadRequestException('Bad. artistId is invalid (not uuid)')

        const track = await this.trackService.getByIdTrack(id);

        if (!track) throw new BadRequestException("track not found")

        const artInd = this.favorites.tracks.findIndex(track => track.id == id);

        if (artInd == -1) throw new BadRequestException("Favorites not found track")

        this.favorites.tracks.splice(artInd, 1);

        return "Deleted succesfully"
    }

    public async addFavoriteAlbom(id: string): Promise<string> {
        if (!validate(id)) throw new BadRequestException('Bad. artistId is invalid (not uuid)')

        const albom = await this.albomService.getOneAlbom(id);

        if (!albom) throw new BadRequestException("albom not found")

        this.favorites.albums.push(albom);

        return "Added succesfully"

    }

    public async deleteAlbom(id: string): Promise<string> {
        if (!validate(id)) throw new BadRequestException('Bad. albomId is invalid (not uuid)')

        const albom = await this.albomService.getOneAlbom(id);

        if (!albom) throw new BadRequestException("albom not found")

        const artInd = this.favorites.albums.findIndex(albom => albom.id == id);

        if (artInd == -1) throw new BadRequestException("Favorites not found albom")

        this.favorites.albums.splice(artInd, 1);

        return "Deleted succesfully"
    }
}