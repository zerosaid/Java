
//ejercicio #1
const cosas = ["Mesa","Pan","Aro","Cama","Cuadro","Libreta","Botella", "Escritorio", "Calendario", "Lámpara", "Computadora"]
console.log(cosas);

let nuevaarray= cosas.filter(elem => elem.length>=4);
console.log(nuevaarray)

//ejercicio #2
const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, reiciendis?";
let term = "lorem";

function checkInString(text, term) {
    return text.toLowerCase().includes(term.toLowerCase());
}

console.log(checkInString(text, term)); 