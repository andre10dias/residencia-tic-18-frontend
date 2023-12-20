export class Destaque {
    private _id: string;
    private _url: string;
    private _largura: number;
    private _altura: number;

    constructor(id: string, url: string, largura: number, altura: number) {
        this._id = id;
        this._url = url;
        this._largura = largura;
        this._altura = altura;
    }

    public get id(): string {
        return this._id;
    }

    public get url(): string {
        return this._url;
    }

    public get largura(): number {
        return this._largura;
    }

    public get altura(): number {
        return this._altura;
    }
}
