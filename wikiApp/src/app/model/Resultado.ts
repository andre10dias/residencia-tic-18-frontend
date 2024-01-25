export class Resultado {
    private titulo: string;
    private trecho: string;
    private dataHora: Date;
    private paginaId: number;

    constructor(titulo: string, trecho: string, dataHora: Date, paginaId: number) {
        this.titulo = titulo;
        this.trecho = trecho;
        this.dataHora = dataHora;
        this.paginaId = paginaId;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getTrecho(): string {
        return this.trecho;
    }

    public getDataHora(): Date {
        return this.dataHora;
    }

    public getPaginaId(): number {
        return this.paginaId;
    }

    public setTitulo(titulo: string) {
        this.titulo = titulo;
    }

    public setTrecho(trecho: string) {
        this.trecho = trecho;
    }

    public setDataHora(dataHora: Date) {
        this.dataHora = dataHora;
    }

    public setPaginaId(paginaId: number) {
        this.paginaId = paginaId;
    }
}