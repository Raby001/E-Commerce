import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateReceiptsDto{
    @IsDateString()
    issuedAt: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @Type(()=>Number)
    @IsNumber()
    @Min(0)
    price: number;
}