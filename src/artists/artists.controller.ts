
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { IArtist } from './interface/artist.interface';
import { ArtistService } from './artists.service';
import { CreateArtistDto } from './dto/create.artistdto';

@ApiTags("Artists")
@Controller("artist")
export class ArtistController {
    constructor(private readonly artistService: ArtistService){}

    @Get()
    public async getAllArtist(): Promise<IArtist[]>{
        return this.artistService.getAllArtist();
    }

    @ApiParam({name: "id"})
    @Get(":id")
    public async getOneArtist(@Param("id") id: string): Promise<IArtist> {
        return this.artistService.getOneArtist(id);
    }

    @Post("")
    public async createArtist(@Body() data: CreateArtistDto): Promise<IArtist> {
        return this.artistService.createArtist(data);
    }

    @ApiParam({name: "id"})
    @Put(":id")
    public async updateArtist(@Param("id") id: string, @Body() data: CreateArtistDto): Promise<IArtist>{
        return this.artistService.updateArtist(id, data);
    }

    @ApiParam({name: "id"})
    @Delete(":id")
    public async deleteArtist(@Param("id") id: string): Promise<string>{
        return this.artistService.deleteArtist(id);
    }

}