import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller()
export class AuthController {

    @Post("login")
    public async login(){}

    @Post("singup")
    public async signup(){}
}