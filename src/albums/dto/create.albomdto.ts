import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class AlbomDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    year: number;

    artistId: string | null;
}