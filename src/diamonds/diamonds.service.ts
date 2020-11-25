import { Injectable } from '@nestjs/common';
import { Diamond } from './Interfaces/diamond.interface';

var CryptoJS = require("crypto-js");

@Injectable()
export class DiamondsService {

    getHash(diamond : Diamond) : string {
        const hash = CryptoJS.SHA256(JSON.stringify(diamond)).toString(CryptoJS.enc.hex);
        return hash;
    }

}
