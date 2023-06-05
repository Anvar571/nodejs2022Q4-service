import { BadRequestException, Injectable } from '@nestjs/common';
import { IUser, IUserCreate, IUserReturnType, IUserUpdate } from './interface/user.interface';
import {v4 as uuidv4, validate} from "uuid";

@Injectable()
export class UserService {
    private users: Array<any> = [];

    public async createUser(data: IUserCreate): Promise<IUserReturnType> {
        const newUser = {
            id: uuidv4(),
            login: data.login,
            password: data.password,
            version: 1,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }

        this.users.push(newUser)
        const { password, ...result} = newUser;

        return result
    }

    public async getAllUser(): Promise<IUserReturnType[]> {
        const res = this.users.map((user) => {
            const {password, ...result} = user
            return result
        })

        return res
    }

    public async getByIdUser(id: string): Promise<IUserReturnType> {
        
        if (!validate(id) ) throw new BadRequestException("Bad request. userId is invalid (not uuid)")
        const user = this.users.find((user) => user.id === id) as IUser;

        if (!user) throw new BadRequestException("User not found!")
        
        const {password, ...result} = user;

        return result
    }

    public async updateUser(id: string, data: IUserUpdate): Promise<IUserReturnType> {
        if (!validate(id)) throw new BadRequestException("Bad request. userId is invalid (not uuid)")

        const user = this.users.find(user => user.id == id) as IUser;

        if (data.oldPassword !== user.password) throw new BadRequestException("OldPassowrd is wrong")

        if (!user) throw new BadRequestException("User not found!")

        const {password, ...result} = this.users.map(
            (item) => item.id == id ? { ...item, ...data } : item
        ) as unknown as IUser

        return result
    }

    public async deleteUser(id: string): Promise<string> {
        
        if (!validate(id)) throw new BadRequestException("Bad request. userId is invalid (not uuid)")

        const findUser = this.users.findIndex(user => user.id == id);
        if (!findUser) throw new BadRequestException("User not found!")

        this.users.splice(findUser, 1);

        return "The user has been deleted";
    }   
}