import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class TrackDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    albumId: string | null;
    artistId: string | null;

    @IsNotEmpty()
    @IsNumber()
    duration: number
}