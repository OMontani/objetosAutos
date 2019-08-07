import Vehiculo from "./Vehiculo";
export default class Camioneta extends Vehiculo {
    private cabina :number;
    private capacidadCarga :number;

    constructor(mar: string, an: number, col: string, mat: string , mod:string , cab:number, capC:number){
        super(mar,an,col,mat,mod);
        this.cabina=cab;
        this.capacidadCarga=capC;
    }
    public getCabina(): number {
        return this.cabina;
    }
    public getCapacidadCarga(): number {
        return this.capacidadCarga;
    }
    getDatos(indice){
        console.log (indice + ") || MARCA : " + this.getMarca() + " ||  MODELO: " + this.getModelo() + " || COLOR : " + this.getColor() + " || MATRICULA : " + this.getMatricula() + " || ANIO : " + this.getAnio() + " || CABINA : " + this.getCabina() + " || Cap. CARGA : " + this.getCapacidadCarga() );
    }

}