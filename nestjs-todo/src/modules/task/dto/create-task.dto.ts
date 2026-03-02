import { Optional } from "@nestjs/common"
import { IsOptional, IsString, isString, Length, MinLength } from "class-validator"

export class createTaskDto{
    @IsString({message:"Name must be a string"})
    name: string
    @IsOptional()
    @IsString()
    description?: string   
}