import { Veiculo } from "./Veiculo";

export class Aviao extends Veiculo {
    private _teto: string;

    constructor(
        nome: string,
        modelo: string,
        motor: string,
        numeroPassageiros: number,
        autonomia: string,
        alcance: string,
        teto: string,
    ) {
        super(nome, modelo, motor, numeroPassageiros, autonomia, alcance);
        this._teto = teto;
    }

    get teto(): string {
        return this._teto;
    }

    set teto(teto: string) {
        this._teto = teto;
    }
}