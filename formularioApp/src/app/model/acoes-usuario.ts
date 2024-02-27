export class AcoesUsuario {
    private _dataHora: Date;
    private _campo: string;

    constructor(dataHora: Date, campo: string) {
        this._dataHora = dataHora;
        this._campo = campo;
    }

    get dataHora(): Date {
        return this._dataHora;
    }

    set dataHora(dataHora: Date) {
        this._dataHora = dataHora;
    }

    get campo(): string {
        return this._campo;
    }

    set campo(campo: string) {
        this._campo = campo;
    }

}
