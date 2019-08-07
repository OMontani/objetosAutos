"use strict";
exports.__esModule = true;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(mar, an, col, mat, mod) {
        this.marca = mar;
        this.anio = an;
        this.color = col;
        this.matricula = mat;
        this.modelo = mod;
    }
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    Vehiculo.prototype.getMatricula = function () {
        return this.matricula;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    return Vehiculo;
}());
exports["default"] = Vehiculo;
