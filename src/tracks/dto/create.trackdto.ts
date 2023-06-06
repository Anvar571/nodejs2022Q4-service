import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class TrackDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    albumId: string | null;
    @ApiProperty()
    artistId: string | null;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    duration: number
}