// //Funcioenes nombradas
// function sumar(a, b){
//     return a + b;
// }

// let x = Number(prompt("Digite el primer numero"));
// let y = Number(prompt("Digite el segundo numero"));
// let res = sumar(x, y);
// alert(`Resultado:  ${res}`);

// //Funciones anonimas
// const calculararea = function(base, altura){
//     return base * altura / 2;
// }
// let resul = calculararea(x, y)
// alert(`El area es: ${resul}`)

//Funciones flecha
const resta =(a,b)=> a-b

const calcularar = (base, altura) => {return base * altura /2;}

const saludo = nombre =>`Hola ${nombre}`;

let res1 = resta(5,6)
let res2 = calcularar(4,5)
console.log("Resultado de la resta: ", res1)
console.log("El area es: ", res2)
console.log(saludo("Daniel"))

let mensaje = () => console.log("Hey!")

mensaje();