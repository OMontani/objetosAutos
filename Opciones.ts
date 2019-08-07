export default class Opciones {
    private modelosCamionetas: Array<string> = [];
    private modelosAutos: Array<string> = [];
    private colores: Array<string> = [];
    private marcas: Array<string> = [];
    private tiposCabinas: Array<number> = [];
    private tiposPuertas: Array<number> = [];
    constructor(){
        //CAMBIAR A MATRIZ MARCAS Y MODELOS SEPARADOS

        /// Modelos Camionetas///
        this.modelosCamionetas.push("F-150");
        this.modelosCamionetas.push("Amarok");
        this.modelosCamionetas.push("Hilux");
        this.modelosCamionetas.push("Ram");
        this.modelosCamionetas.push("Toro");

        /// Modelos Autos///
        this.modelosAutos.push("Clio");
        this.modelosAutos.push("Ka");
        this.modelosAutos.push("Onix");
        this.modelosAutos.push("Gol Trend");
        this.modelosAutos.push("308");
        this.modelosAutos.push("C3");

        ///Colores///
        this.colores.push("Rojo");
        this.colores.push("Blanco");
        this.colores.push("Gris Claro");
        this.colores.push("Gris Oscuro");
        this.colores.push("Negro");
        this.colores.push("Azul");

        ///Marcas///
        this.marcas.push("Fiat");
        this.marcas.push("Ford");
        this.marcas.push("Chevrolet");
        this.marcas.push("Citroen");
        this.marcas.push("Honda");
        this.marcas.push("Toyota");
        this.marcas.push("Volkswagen");
        this.marcas.push("Peuggeot");

        ///Tipos Cabinas///
        this.tiposCabinas.push(1);
        this.tiposCabinas.push(1.5);
        this.tiposCabinas.push(2);

        ///Tipos Puertas///
        this.tiposPuertas.push(3);
        this.tiposPuertas.push(5);
    }


    public getModelosCamionetas():Array<string>{
        return this.modelosCamionetas;
    }
    public getModelosAutos():Array<string>{
        return this.modelosAutos;
    }
    public getColores():Array<string>{
        return this.colores;
    }
    public getMarcas():Array<string>{
        return this.marcas;
    }
    public getTiposCabinas():Array<number>{
        return this.tiposCabinas;
    }
    public getTiposPuertas():Array<number>{
        return this.tiposPuertas;
    }
}