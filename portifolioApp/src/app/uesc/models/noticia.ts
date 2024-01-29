export class Noticia {
    private _id: number;
    private _titulo: string;
    private _introducao: string;

    constructor(id: number, titulo: string, introducao: string) {
        this._id = id;
        this._titulo = titulo;
        this._introducao = introducao;
    }

    public get id(): number {
        return this._id;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public get introducao(): string {
        return this._introducao;
    }
}