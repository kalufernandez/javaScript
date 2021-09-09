let numero1 = prompt("Ingrese un numero")
let numero2 = prompt("Ingrese otro numero para sumarlo al primero")
//Lo que devuelve la funcion prompt, es un string, por lo tanto, si quiero hacer alguna operacion matematica, tengo que convertir la salida en un numero a traves de parseInt().

if(numero1 < numero2) {
    alert("El primer numero ingresado, " + numero1 + ", es menor que el segundo, " + numero2 + ".")
}
else if (numero1 > numero2) {
    alert("El primer numero ingresado, " + numero1 + ", es mayor que el segundo, " + numero2 + ".")
}
else {
    alert("Los numeros ingresados son iguales")
}
