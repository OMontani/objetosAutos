import * as ReadlineSync from "readline-sync";
import Vehiculo from "./Vehiculo"
import Auto from "./Auto";
import Camioneta from "./Camioneta";

export default class Registro {

    private lista: Array<any> = [];

    constructor() {
        

    }
    public getLista() :Array<any>{
        return this.lista;
    }
    public registrarVehiculo(){
        console.clear();
        console.log("___        Agregar Vehiculo al registro       ___");
        console.log("-------------------------------------------------");
        console.log("");
        console.log(" || 1 - Auto || 2 - Camioneta || 0 - Cancelar || ");

        let opN :Number = ReadlineSync.questionInt("Seleccione una opcion : ");
        if (opN == 1 ){
            this.registrarAuto();
        }else if (opN == 2){
            this.registrarCamioneta();
        }else if ( opN == 0) {
            return;
        }else {
            this.registrarVehiculo();
        }
    }
    private registrarAuto() {
        console.clear();
        let nMarca = ReadlineSync.question("MARCA : ");
        let nAnio = ReadlineSync.questionInt("AÑO : ");
        let nColor = ReadlineSync.question("COLOR : ");
        let nMatricula = ReadlineSync.question("MATRICULA : ");
        let nModelo = ReadlineSync.question("MODELO : ");
        let nPuertas = ReadlineSync.questionInt("PUERTAS : ");
        let nBaul = ReadlineSync.questionInt("LTS BAUL : ");
        this.lista.push(new Auto(nMarca, nAnio, nColor, nMatricula,nModelo,nPuertas,nBaul));
    }
    private registrarCamioneta(){
        console.clear();
        let nMarca = ReadlineSync.question("MARCA : ");
        let nAnio = ReadlineSync.questionInt("AÑO : ");
        let nColor = ReadlineSync.question("COLOR : ");
        let nMatricula = ReadlineSync.question("MATRICULA : ");
        let nModelo = ReadlineSync.question("MODELO : ");
        let nCabina = ReadlineSync.questionInt("CABINA : ");
        let nCapC = ReadlineSync.questionInt("CAPACIDAD DE CARGA : ");
        this.lista.push(new Camioneta(nMarca, nAnio, nColor, nMatricula,nModelo,nCabina,nCapC));
    }
    public mostrarLista() {
        console.clear();
        if (this.lista.length == 0){
            console.log("No se ha ingresado ningun vehiculo al registro");
        }
        for (let i = 0; i < this.lista.length; i++) {
            this.lista[i].getDatos(i);
        }
    }
    eliminarVehiculo() {
        console.clear();
        let indice = ReadlineSync.questionInt("ingrese el numero de indice del auto a eliminar : ");
        for (let i = indice; i < this.lista.length; i++) {
            this.lista[i] = this.lista[i + 1]
        }
        this.lista.pop();
    }
    public buscarEnRegistro() {
        console.log("seleccione el parametro por el que desea buscar");
        console.log("-----------------------------------------------");
        let selector = ReadlineSync.questionInt("|| 1- Marca || 2- Modelo || 3- Color || 4- Matricula ||");
        if (selector == 1) {
            let parametroBusqueda = ReadlineSync.question("Marca : ");
            this.buscarPorMarca(parametroBusqueda);
        } else if (selector == 2) {
            let parametroBusqueda = ReadlineSync.questionInt("Modelo : ");
            this.buscarPorModelo(parametroBusqueda);
        } else if (selector == 3) {
            let parametroBusqueda = ReadlineSync.question("Color : ");
            this.buscarPorColor(parametroBusqueda);
        } else if (selector == 4) {
            let parametroBusqueda = ReadlineSync.question("Matricula : ");
            this.buscarPorMatricula(parametroBusqueda);
        } else {
            console.log("Por Favor seleccione una opcion valida");
            this.buscarEnRegistro();
        }
    }
    private buscarPorMarca(aBuscar: string) {
        let encontrados: Array<number> = [];
        let indice: number = 0;
        for (let i = 0; i < this.lista.length; i++) {
            let objetoTemp = this.lista[i];
            if (objetoTemp.getMarca() == aBuscar) {
                encontrados[indice] = i;
                indice++;
            }
        }
        console.log(encontrados);
        this.imprimirEncontrados(encontrados);
    }
    private buscarPorModelo(aBuscar: number) {
        let encontrados: Array<number> = [];
        let indice: number = 0;
        for (let i = 0; i < this.lista.length; i++) {
            let objetoTemp = this.lista[i];
            if (objetoTemp.getModelo() == aBuscar) {
                encontrados[indice] = i;
                indice++;
            }
        }
        this.imprimirEncontrados(encontrados);
    }
    private buscarPorColor(aBuscar: string) {
        let encontrados: Array<number> = [];
        let indice: number = 0;
        for (let i = 0; i < this.lista.length; i++) {
            let objetoTemp = this.lista[i];
            if (objetoTemp.getColor() == aBuscar) {
                encontrados[indice] = i;
                indice++;
            }
        }
        this.imprimirEncontrados(encontrados);
    }
    private buscarPorMatricula(aBuscar: string) {
        let encontrados: Array<number> = [];
        let indice: number = 0;
        for (let i = 0; i < this.lista.length; i++) {
            let objetoTemp = this.lista[i];
            if (objetoTemp.getMatricula() == aBuscar) {
                encontrados[indice] = i;
                indice++;
            }
        }
        this.imprimirEncontrados(encontrados);
    }

    private imprimirEncontrados(encontrados: Array<number>) {
        console.log("Se han encontrado " + encontrados.length + " resultados en el registro");
        let verEncontrados = ReadlineSync.keyInYN("desea verlos en detalle? ");
        if (verEncontrados == true) {
            for (let i = 0; i < encontrados.length; i++) {
                let indice: number = encontrados[i];
                this.lista[indice].getDatos(indice);


                //console.log(i + " )  MARCA: " + this.lista[indice].getMarca() + " MODELO: " + this.lista[indice].getModelo() + " COLOR: " + this.lista[indice].getColor() + " MATRICULA: " + this.lista[indice].getMatricula());

            }
        }

    }
}