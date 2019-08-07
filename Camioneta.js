"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vehiculo_1 = require("./Vehiculo");
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(mar, an, col, mat, mod, cab, capC) {
        var _this = _super.call(this, mar, an, col, mat, mod) || this;
        _this.cabina = cab;
        _this.capacidadCarga = capC;
        return _this;
    }
    Camioneta.prototype.getCabina = function () {
        return this.cabina;
    };
    Camioneta.prototype.getCapacidadCarga = function () {
        return this.capacidadCarga;
    };
    Camioneta.prototype.getDatos = function (indice) {
        console.log(indice + ") || MARCA : " + this.getMarca() + " ||  MODELO: " + this.getModelo() + " || COLOR : " + this.getColor() + " || MATRICULA : " + this.getMatricula() + " || ANIO : " + this.getAnio() + " || CABINA : " + this.getCabina() + " || Cap. CARGA : " + this.getCapacidadCarga());
    };
    return Camioneta;
}(Vehiculo_1["default"]));
exports["default"] = Camioneta;
