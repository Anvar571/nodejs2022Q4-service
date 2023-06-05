import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/create.authdto";

@ApiTags("Auth")
@Controller("Auth")
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post("login")
    public async login(@Body() data: AuthDto){
        return this.authService.login(data)
    }

    @Post("singup")
    public async signup(@Body() data: AuthDto){
        return this.authService.register(data)
    }
}