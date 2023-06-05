import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/create.authdto";

@ApiTags("Auth")
@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService){}

    // @ApiOkResponse({
    //     description: 'The user login',
    //     type: AuthDto,
    // })
    @Post("login")
    public async login(@Body() data: AuthDto){
        return this.authService.login(data)
    }

    @Post("singup")
    public async signup(@Body() data: AuthDto){
        return this.authService.register(data)
    }
}