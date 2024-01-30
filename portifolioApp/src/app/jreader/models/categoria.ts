import { Aviao } from "./aviao";
import { Barco } from "./barco";
import { Carro } from "./carro";

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
