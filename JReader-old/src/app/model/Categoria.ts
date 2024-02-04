import { Aviao } from "./Aviao";
import { Barco } from "./Barco";
import { Carro } from "./Carro";

export class Categoria {
    aviao: Aviao[];
    carro: Carro[];
    barco: Barco[];

    constructor(aviao: Aviao[], carro: Carro[], barco: Barco[]) {
        this.aviao = aviao;
        this.carro = carro;
        this.barco = barco;
    }
}