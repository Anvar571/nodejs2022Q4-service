import { ApiProperty,  } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
    @ApiProperty({ example: '3124311adac', description: 'oldPassword' })
    @IsString()
    @IsNotEmpty()
    oldPassword: string;

    @ApiProperty({ example: '3124311adac', description: 'newPassword' })
    @IsString()
    @IsNotEmpty()
    newPassword: string;
}