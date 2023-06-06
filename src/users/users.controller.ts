import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { IUserReturnType } from "./interface/user.interface";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/create.userdto";
import { UpdateUserDto } from "./dto/update.userdto";
import { ApiParam, ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    public async getAllUser(): Promise<IUserReturnType[]>{
        return await this.userService.getAllUser();
    }

    @Post()
    public async createUser(@Body() data: CreateUserDto): Promise<IUserReturnType> {
        return await this.userService.createUser(data);
    }

    @ApiParam({name: "id"})
    @Get(":id")
    public async getByIdUser(@Param('id') id: string): Promise<IUserReturnType> {
        return await this.userService.getByIdUser(id);
    }

    @ApiParam({name: "id"})
    @Put(":id")
    public async updateUser(@Param("id") id: string, data: UpdateUserDto): Promise<IUserReturnType>{
        return this.userService.updateUser(id, data)
    }

    @ApiParam({name: "id"})
    @Delete(":id")
    public async deleteUser(@Param('id') id: string): Promise<string>{
        return this.userService.deleteUser(id)
    }
}