import { isString } from "util";

import { IsInt,IsString } from 'class-validator';

export class DiamondDTO {
    @IsString()
    readonly color: string;

    @IsString()
    readonly cut: string;

    @IsString()
    readonly clarity: string;

    @IsInt()
    readonly caratWeight: number;
  }