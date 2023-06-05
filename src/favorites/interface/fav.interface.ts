
import { ITrack } from '../../tracks/interface/track.interface';
import { IAlbom } from '../../albums/interface/album.interface';
import { IArtist } from '../../artists/interface/artist.interface';


export interface IFavorites {
    artists: IArtist[];
    albums: IAlbom[];
    tracks: ITrack[];
}

