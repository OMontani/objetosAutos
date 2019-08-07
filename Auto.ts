import Vehiculo from "./Vehiculo";
export default class Auto extends Vehiculo {
    private puertas :number;
    private baulLts :number;

    constructor(mar: string, an: number, col: string, mat: string , mod:string , pts:number, lts:number){
        super(mar,an,col,mat,mod);
        this.puertas=pts;
        this.baulLts=lts;
    }
    public getPuertas(): number {
        return this.puertas;
    }
    public getBaulLts(): number {
        return this.baulLts;
    }
    getDatos(indice){
        console.log (indice + ") || MARCA : " + this.getMarca() + " ||  MODELO: " + this.getModelo() + " || COLOR : " + this.getColor() + " || MATRICULA : " + this.getMatricula() + " || ANIO : " + this.getAnio() + " || PUERTAS : " + this.getPuertas() + " || Lts. BAUL : " + this.getBaulLts() );
    }

}