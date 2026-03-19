import { Type } from "class-transformer";
import { IsDateString, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class UpdateReceiptDto{
    @IsOptional()
    @IsDateString()
    issuedAt?: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @Type(()=>Number)
    @IsNumber()
    @Min(0)
    price?: number;
}