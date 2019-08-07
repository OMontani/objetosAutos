export default class Vehiculo {

    private marca: string;
    private anio: number;
    private color: string;
    private matricula: string;
    private modelo :string;

    constructor(mar: string, an: number, col: string, mat: string ,mod:string) {
        this.marca = mar;
        this.anio = an;
        this.color = col;
        this.matricula = mat;
        this.modelo = mod;
    }

    public getMarca(): string {
        return this.marca;
    }
    public getAnio(): number {
        return this.anio;
    }
    public getColor(): string {
        return this.color;
    }
    public getMatricula(): string {
        return this.matricula;
    }
    public getModelo(): string {
        return this.modelo;
    }

}