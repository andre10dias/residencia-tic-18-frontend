import { AcoesUsuario } from "./acoes-usuario";

export class AcoesValor extends AcoesUsuario {
    private _valor: string;

    constructor(dataHora: Date, campo: string, valor: string) {
        super(dataHora, campo);
        this._valor = valor;
    }

    get valor(): string {
        return this._valor;
    }

    set valor(valor: string) {
        this._valor = valor;
    }
}
