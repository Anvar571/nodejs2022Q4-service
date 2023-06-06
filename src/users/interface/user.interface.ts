

export interface IUser {
    id: string;
    login: string;
    password: string;
    version: number;
    createdAt: number;
    updatedAt: number;
}

export interface IUserCreate {
    login: string;
    password: string;
}

export interface IUserReturnType {
    id: string;
    login: string;
    version: number;
    createdAt: number;
    updatedAt: number;
}

export interface IUserUpdate {
    oldPassword: string;
    newPassword: string
}