import { Controller, Post, Body, Get } from '@nestjs/common';
import { DiamondsService } from './diamonds.service';
import { DiamondDTO } from './dto/diamond.dto'

@Controller('diamonds')
export class DiamondsController {

    constructor(private readonly diamondsService: DiamondsService){

    }

    @Post('getHash')
    getHash(@Body() diamondDTO:DiamondDTO) : string {
        return this.diamondsService.getHash(diamondDTO);
    }

    @Get()
    getDiamonds(): string { 
        return "Hello Diamonds";
    }

}
