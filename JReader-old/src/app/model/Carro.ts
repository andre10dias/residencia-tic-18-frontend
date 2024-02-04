import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {

    constructor(
        nome: string,
        modelo: string,
        motor: string,
        numeroPassageiros: number,
        autonomia: string,
        alcance: string,
    ) {
        super(nome, modelo, motor, numeroPassageiros, autonomia, alcance);
    }
}