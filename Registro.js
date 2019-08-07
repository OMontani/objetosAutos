"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var Auto_1 = require("./Auto");
var Camioneta_1 = require("./Camioneta");
var Registro = /** @class */ (function () {
    function Registro() {
        this.lista = [];
    }
    Registro.prototype.getLista = function () {
        return this.lista;
    };
    Registro.prototype.registrarVehiculo = function () {
        console.clear();
        console.log("___        Agregar Vehiculo al registro       ___");
        console.log("-------------------------------------------------");
        console.log("");
        console.log(" || 1 - Auto || 2 - Camioneta || 0 - Cancelar || ");
        var opN = ReadlineSync.questionInt("Seleccione una opcion : ");
        if (opN == 1) {
            this.registrarAuto();
        }
        else if (opN == 2) {
            this.registrarCamioneta();
        }
        else if (opN == 0) {
            return;
        }
        else {
            this.registrarVehiculo();
        }
    };
    Registro.prototype.registrarAuto = function () {
        console.clear();
        var nMarca = ReadlineSync.question("MARCA : ");
        var nAnio = ReadlineSync.questionInt("AÑO : ");
        var nColor = ReadlineSync.question("COLOR : ");
        var nMatricula = ReadlineSync.question("MATRICULA : ");
        var nModelo = ReadlineSync.question("MODELO : ");
        var nPuertas = ReadlineSync.questionInt("PUERTAS : ");
        var nBaul = ReadlineSync.questionInt("LTS BAUL : ");
        this.lista.push(new Auto_1["default"](nMarca, nAnio, nColor, nMatricula, nModelo, nPuertas, nBaul));
    };
    Registro.prototype.registrarCamioneta = function () {
        console.clear();
        var nMarca = ReadlineSync.question("MARCA : ");
        var nAnio = ReadlineSync.questionInt("AÑO : ");
        var nColor = ReadlineSync.question("COLOR : ");
        var nMatricula = ReadlineSync.question("MATRICULA : ");
        var nModelo = ReadlineSync.question("MODELO : ");
        var nCabina = ReadlineSync.questionInt("CABINA : ");
        var nCapC = ReadlineSync.questionInt("CAPACIDAD DE CARGA : ");
        this.lista.push(new Camioneta_1["default"](nMarca, nAnio, nColor, nMatricula, nModelo, nCabina, nCapC));
    };
    Registro.prototype.mostrarLista = function () {
        console.clear();
        if (this.lista.length == 0) {
            console.log("No se ha ingresado ningun vehiculo al registro");
        }
        for (var i = 0; i < this.lista.length; i++) {
            this.lista[i].getDatos(i);
        }
    };
    Registro.prototype.eliminarVehiculo = function () {
        console.clear();
        var indice = ReadlineSync.questionInt("ingrese el numero de indice del auto a eliminar : ");
        for (var i = indice; i < this.lista.length; i++) {
            this.lista[i] = this.lista[i + 1];
        }
        this.lista.pop();
    };
    Registro.prototype.buscarEnRegistro = function () {
        console.log("seleccione el parametro por el que desea buscar");
        console.log("-----------------------------------------------");
        var selector = ReadlineSync.questionInt("|| 1- Marca || 2- Modelo || 3- Color || 4- Matricula ||");
        if (selector == 1) {
            var parametroBusqueda = ReadlineSync.question("Marca : ");
            this.buscarPorMarca(parametroBusqueda);
        }
        else if (selector == 2) {
            var parametroBusqueda = ReadlineSync.questionInt("Modelo : ");
            this.buscarPorModelo(parametroBusqueda);
        }
        else if (selector == 3) {
            var parametroBusqueda = ReadlineSync.question("Color : ");
            this.buscarPorColor(parametroBusqueda);
        }
        else if (selector == 4) {
            var parametroBusqueda = ReadlineSync.question("Matricula : ");
            this.buscarPorMatricula(parametroBusqueda);
        }
        else {
            console.log("Por Favor seleccione una opcion valida");
            this.buscarEnRegistro();
        }
    };
    Registro.prototype.buscarPorMarca = function (aBuscar) {
        var encontrados = [];
        var indice = 0;
        for (var i = 0; i < this.lista.length; i++) {
            var objetoTemp = this.lista[i];
            if (objetoTemp.getMarca() == aBuscar) {
                encontrados[indice] = i;
                indice++;
            }
        }
        console.log(encontrados);
        this.imprimirEncontrados(encontrados);
    };
    Registro.prototype.buscarPorModelo = function (aBuscar) {
        var encontrados = [];
        var indice = 0;
        for (var i = 0; i < this.lista.length; i++) {
            var objetoTemp = this.lista[i];
            if (objetoTemp.getModelo() == aBuscar) {
                encontrados[indice] = i;
                indice++;
            }
        }
        this.imprimirEncontrados(encontrados);
    };
    Registro.prototype.buscarPorColor = function (aBuscar) {
        var encontrados = [];
        var indice = 0;
        for (var i = 0; i < this.lista.length; i++) {
            var objetoTemp = this.lista[i];
            if (objetoTemp.getColor() == aBuscar) {
                encontrados[indice] = i;
                indice++;
            }
        }
        this.imprimirEncontrados(encontrados);
    };
    Registro.prototype.buscarPorMatricula = function (aBuscar) {
        var encontrados = [];
        var indice = 0;
        for (var i = 0; i < this.lista.length; i++) {
            var objetoTemp = this.lista[i];
            if (objetoTemp.getMatricula() == aBuscar) {
                encontrados[indice] = i;
                indice++;
            }
        }
        this.imprimirEncontrados(encontrados);
    };
    Registro.prototype.imprimirEncontrados = function (encontrados) {
        console.log("Se han encontrado " + encontrados.length + " resultados en el registro");
        var verEncontrados = ReadlineSync.keyInYN("desea verlos en detalle? ");
        if (verEncontrados == true) {
            for (var i = 0; i < encontrados.length; i++) {
                var indice = encontrados[i];
                this.lista[indice].getDatos(indice);
                //console.log(i + " )  MARCA: " + this.lista[indice].getMarca() + " MODELO: " + this.lista[indice].getModelo() + " COLOR: " + this.lista[indice].getColor() + " MATRICULA: " + this.lista[indice].getMatricula());
            }
        }
    };
    return Registro;
}());
exports["default"] = Registro;
