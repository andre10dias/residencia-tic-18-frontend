import { AcoesUsuario } from "./acoes-usuario";

export class AcoesStatus extends AcoesUsuario {
    private _status: string;

    constructor(dataHora: Date, campo: string, status: string) {
        super(dataHora, campo);
        this._status = status;
    }

    get status(): string {
        return this._status;
    }

    set status(status: string) {
        this._status = status;
    }
}
