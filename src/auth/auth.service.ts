import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "../users/users.service";
import { IJwtToken, ILogin, IRegister } from "./interface/auth.interface";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ){}

    public async login(data: ILogin): Promise<IJwtToken> {
        const user = await this.userService.findUser(data.login);

        if (!user) throw new BadRequestException("Incorrect login or password");

        const compPass = await bcrypt.compare(data.password, user.password)

        if (!compPass) throw new BadRequestException("Incorrect login or password");

        const payload = { sub: user.login, username: user.login }

        return {
            token: await this.jwtService.signAsync(payload)
        }
    }

    public async register(data: IRegister): Promise<string> {
        const user = this.userService.findUser(data.login);

        if (!user) throw new BadRequestException("Conflict. Login already exists");

        const hashPass = await bcrypt.hash(data.password, 10);

        const newUser = {
            login: data.login,
            password: hashPass
        }

        return await this.userService.addUser(newUser);
    }
}