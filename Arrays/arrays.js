const campers = ["Carlos", "Luisa", "Karol", "Camila", "Jesus"]

// recorrido por indices
for (let i=0; i < campers.length; ++i)
    console.log(campers[i]);

console.log(":)".repeat(30));

// for .. of : recorrido por elementos
for(let camper of campers)
    console.log(camper);

/* ***********METODOS DE LOS ARRAYS*********** */

//1. push(): agrega elementos al final del array
campers.push("Sandrith");
console.log(campers);

//2. ppop(): elimina el ultimo elmento del array y lo devuelve
let elem = campers.pop();
console.log(elem);
console.log(campers);

//3. shift(): elimina el primer elemento
elem = campers.shift();
console.log(elem);
console.log(campers);

//4. unshift(): agrega al principio del array
campers.unshift("Pedro");
console.log(campers);

//5. slice(): devuelve una parte del array
console.log(campers.slice(1,4))

//6. splice(): agrega o elimina elements y los devuelve
console.log(campers.splice(1,3));
console.log(campers);
console.log(campers.splice(1,0, "Javier", "Hugo"))
console.log(campers);

//7. concat(): une dos o mas array y devuelva el nuevo array
const grupoC4 = campers.concat(["Orlando","Nicolas","Andrey"]);
console.log(grupoC4);

// 8. join(): une todos los elementos de una array en una cadena de texto separada por un caracter
console.log(campers.join(" * "));

// 9. indexOf: devuelve el indice del primer elemento. -1 si no lo encuentra
console.log(campers.indexOf("Hugo"));
console.log(campers);

/* *********Metodos de un array********* */

//1. forEach.
campers.forEach(camper => console.log(camper.toUpperCase()));
campers.forEach(camper => console.log(camper.toLowerCase()));

//2. map.
let nuevoArr = campers.map(elem => {
    if (elem === "") return "";
    let vcar = elem.split("");
    let carv = vcar.reverse();
    return carv.join("");
});
console.log(nuevoArr);

//3. filter.
console.log(campers)
nuevoArr = campers.filter(elem => elem.toLowerCase().charAt[0] >= "l");
console.log(nuevoArr);