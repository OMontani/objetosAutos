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
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(mar, an, col, mat, mod, pts, lts) {
        var _this = _super.call(this, mar, an, col, mat, mod) || this;
        _this.puertas = pts;
        _this.baulLts = lts;
        return _this;
    }
    Auto.prototype.getPuertas = function () {
        return this.puertas;
    };
    Auto.prototype.getBaulLts = function () {
        return this.baulLts;
    };
    Auto.prototype.getDatos = function (indice) {
        console.log(indice + ") || MARCA : " + this.getMarca() + " ||  MODELO: " + this.getModelo() + " || COLOR : " + this.getColor() + " || MATRICULA : " + this.getMatricula() + " || ANIO : " + this.getAnio() + " || PUERTAS : " + this.getPuertas() + " || Lts. BAUL : " + this.getBaulLts());
    };
    return Auto;
}(Vehiculo_1["default"]));
exports["default"] = Auto;
