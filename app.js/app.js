document.write("<h1> HOLA MUNDITO<h1>");

//tipo de datos
let saludo ="hola mundo"

console.log(saludo)

// array
let nombres = ["ana","carlos","jose"]

console.log(nombres)
let datos = {nombre:"juan",edad:13, notas:[5.3,6,4.5]}

console.log(datos)

let num1 = 100
let num2 = 30

let resul=num1+num2

console.log("la suma es ",resul)

let nombre = "Paulina";
let apellido = "Gallardo";

let nombreCompleto = nombre + " "+apellido 

document.write("<br>" + " nombre "+nombreCompleto)

//operadores relacionales
/*
!= distinto
== comparacion
===comparacion mas tipo
*/

let one=1
let one_again=1
let one_string="1"

console.log(one==one_again)
console.log(one==one_string)
console.log(one===one_string)

//estructuras de control 

//IF

//muestre si son iguales o distintos

let uno=1
let dos="2"

if (uno == dos){
console.log("son iguales iguales")
}
if(uno==dos){
    console.log("son iguales")
}else{ 
    console.log("son distintos")
}

//switch

let tipoAlumno="diurno"

switch(tipoAlumno){
    case"diurno":
        console.log("es alumno de diurno")
        break;
    case "vespertino":
            console.log("es alumno de noche")
        break;
    default:
            console.log("no es alumno");
}

//ciclos

//muestre los 10 primeros numeros positivos
n = 0
while (n<10) {
    
    n =n+1
    console.log(n)
}
//ejercicio: mostrar numeros pares del 1 al 10

for (let i = 1; i <= 10; i++) {
    if (i%2==0) {
        console.log(i)
    }
}

//ejercicio: hacer una funcion para sacar el promedio 5 notas
function promedio(nota1,nota2,nota3,nota4,nota5){
    let suma= nota1+nota2+nota3+nota4+nota5
    let promedio= suma/5
    return promedio
}
//ahora saca el promedio de 5 notas: 50, 45, 65, 70, 55
let notasPaulina=[50,45,65,70,55]
let promedioPaulina= promedio(notasPaulina[0],notasPaulina[1],notasPaulina[2],notasPaulina[3],notasPaulina[4])
console.log("el promedio de Paulina es: ",promedioPaulina)



