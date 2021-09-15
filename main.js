//Funcion para conocer el stock de repuestos. 
listadoDeRepuestos = "disco" //Aca iria una lista de los repuestos disponibles.
let repuesto = prompt("Ingrese el repuesto por el que desea consultar: \n" + listadoDeRepuestos)

function consultarStock(repuesto, listadoDeRepuestos) {
    for (i in listadoDeRepuestos){
        if (i == repuesto) {
            let cont = cont + 1;
            alert("El repuesto consultado se encuentra ") + cont + " veces";
        }
        else {
            alert("No se encontro el repuesto")
    }}
}

consultarStock(repuesto, listadoDeRepuestos)