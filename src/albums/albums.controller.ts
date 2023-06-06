import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { IAlbom } from "./interface/album.interface";
import { AlbomService } from "./albums.service";
import { AlbomDto } from "./dto/create.albomdto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Albums")
@Controller("albom")
export class AlbomController{
    constructor(private readonly albomService: AlbomService) {}

    @Get()
    public async getAllAlbom(): Promise<IAlbom[]>{
        return this.albomService.getAllAlbom()
    }

    @Get(":id")
    public async getOneAlbom(@Param("id") id: string): Promise<IAlbom>{
        return this.albomService.getOneAlbom(id);
    }

    @Post()
    public async createAlbom(@Body() data: AlbomDto): Promise<IAlbom>{
        return this.albomService.createAlbom(data)
    }

    @Put(":id")
    public async updateAlbom(@Param("id") id: string, @Body() data: AlbomDto): Promise<IAlbom>{
        return this.albomService.updateAlbom(id, data);
    }

    @Delete(":id")
    public async deleteAlbom(@Param("id") id: string): Promise<string>{
        return this.albomService.deleteAlbom(id);
    }

}