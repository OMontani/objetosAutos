import * as ReadlineSync from "readline-sync";
import Registro from "./Registro";

let registroAutomotor = new Registro();
let programaActivo: boolean = true;
while (programaActivo == true) {
    menuInicio();
}


function menuInicio() {
    console.clear();
    console.log("Bienvenido al sistema de Gestion Automotor");
    console.log("------------------------------------------");
    console.log("");
    console.log("Que operacion desea realizar ?");
    console.log("|| 1- Ver lista || 2- Agregar || 3 - Eliminar || 4 - Buscar || 5 - Salir");
    console.log("--------------------------------------------------------------");
    let opN: number = ReadlineSync.questionInt("Selecciona una opcion : ");
    distribuidorMenu(opN);
    let opB :boolean = ReadlineSync.keyInYN("desea realizar otra operacion?");
    if (opB == false) {
        distribuidorMenu(5);
    }
}

function distribuidorMenu(op: number) {
    if (op == 1) {
        registroAutomotor.mostrarLista();
    } else if (op == 2) {
        registroAutomotor.registrarVehiculo(); //agregar funcion en Registro para seleccionar auto o camioneta
    } else if (op == 3) {
        registroAutomotor.eliminarVehiculo();
    } else if (op == 4) {
        registroAutomotor.buscarEnRegistro();
    } else if (op == 5) {
        programaActivo = false;
    } else {
        console.log("Ha seleccionado una opcion invalida, por favor seleccione otra");
        ReadlineSync.keyInYN("Presione una tecla para continuar");
    }

    
}





