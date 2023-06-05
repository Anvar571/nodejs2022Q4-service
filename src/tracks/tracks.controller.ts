import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { TrackDto } from "./dto/create.trackdto";
import { TrackService } from "./tracks.service";
import { ITrack } from "./interface/track.interface";

@ApiTags("tracks")
@Controller("tracks")
export class TrackController {
    constructor(private readonly trackService: TrackService){}

    @Get()
    public async getAllTrack(): Promise<ITrack[]>{
        return await this.trackService.getAllTrack();
    }

    @Post()
    public async createTrack(@Body() data: TrackDto): Promise<ITrack> {
        return await this.trackService.createTrack(data);
    }

    @ApiParam({name: "id"})
    @Get(":id")
    public async getByIdTrack(@Param('id') id: string): Promise<ITrack> {
        return await this.trackService.getByIdTrack(id);
    }

    @ApiParam({name: "id"})
    @Put(":id")
    public async updateTrack(@Param("id") id: string, data: TrackDto): Promise<ITrack>{
        return this.trackService.updateTrack(id, data)
    }

    @ApiParam({name: "id"})
    @Delete(":id")
    public async deleteTrack(@Param('id') id: string): Promise<string>{
        return this.trackService.deleteTrack(id)
    }
}