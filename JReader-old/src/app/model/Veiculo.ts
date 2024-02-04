export class Veiculo {
    private _nome: string;
    private _modelo: string;
    private _motor: string;
    private _numeroPassageiros: number;
    private _autonomia: string;
    private _alcance: string;
   

    constructor(
        nome: string,
        modelo: string,
        motor: string,
        numeroPassageiros: number,
        autonomia: string,
        alcance: string,
    ) {
        this._nome = nome;
        this._modelo = modelo;
        this._motor = motor;
        this._numeroPassageiros = numeroPassageiros;
        this._autonomia = autonomia;
        this._alcance = alcance;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get modelo(): string {
        return this._modelo;
    }

    set modelo(modelo: string) {
        this._modelo = modelo;
    }

    get motor(): string {
        return this._motor;
    }

    set motor(motor: string) {
        this._motor = motor;
    }

    get numeroPassageiros(): number {
        return this._numeroPassageiros;
    }

    set numeroPassageiros(numeroPassageiros: number) {
        this._numeroPassageiros = numeroPassageiros;
    }

    get autonomia(): string {
        return this._autonomia;
    }

    set autonomia(autonomia: string) {
        this._autonomia = autonomia;
    }

    get alcance(): string {
        return this._alcance;
    }

    set alcance(alcance: string) {
        this._alcance = alcance;
    }
}