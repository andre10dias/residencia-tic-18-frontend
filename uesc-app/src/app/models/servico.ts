export class Servico {
    private _titulo: string;
    private _dataHora: string;
    private _condicaoTempo: string;
    private _temperatura: string;
    private _humidade: string;
    private _nebulosidade: string;
    private _volumeChuva: string;
    private _velocidadeVento: string;

    constructor(titulo: string, dataHora: string, condicaoTempo: string, temperatura: string, 
        humidade: string, nebulosidade: string, volumeChuva: string, velocidadeVento: string) {
            
        this._titulo = titulo;
        this._dataHora = dataHora;
        this._condicaoTempo = condicaoTempo;
        this._temperatura = temperatura + " °C";
        this._humidade = humidade + "%";
        this._nebulosidade = nebulosidade + "%";
        this._volumeChuva = volumeChuva + " mm";
        this._velocidadeVento = velocidadeVento;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public get dataHora(): string {
        return this._dataHora;
    }

    public get condicaoTempo(): string {
        return this._condicaoTempo;
    }

    public get temperatura(): string {
        return this._temperatura;
    }

    public get humidade(): string {
        return this._humidade;
    }

    public get nebulosidade(): string {
        return this._nebulosidade;
    }

    public get volumeChuva(): string {
        return this._volumeChuva;
    }

    public get velocidadeVento(): string {
        return this._velocidadeVento;
    }
}
