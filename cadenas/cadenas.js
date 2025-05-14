let cadena ="Grupo C4";
console.log(cadena.length);

//chartAt: Extrae el caracter de la posicion especifica
console.log(cadena.charAt(3));

//slice: Extrae una sudcadena de una cadena
console.log(cadena.slice(6,8));

//replace: Reemplaza toda las ocurrencias de una sudcadena en otra
let cad2 = cadena.replace("4", "3");
console.log(cadena, cad2)

//toUpperCase() : convierte en mayuscula
console.log(cadena.toLocaleUpperCase());

//tolowercase() : convierte todo en minuscula
console.log(cad2.toLowerCase());

//concat(): concatena cadenas
console.log(cad2.concat(", ").concat(cadena));

//repeat(): repite una cadena n veces
console.log(cad2.repeat(28))

//trim(): Elimina los espacios en blanco externos a una cadena
let cad3 = " ".repeat(18).concat("\t".repeat(2).concat(cad2).concat(" ".repeat(5)));
console.log("["+ cad3 + "]");
console.log("["+cad3.trimStart()+ "]");
console.log("["+cad3.trimEnd()+ "]");
console.log("["+cad3.trim()+ "]");

//indexOf: Devuelve la poscicion de la primera aparicion de una sud cadena en una cadena y -1 si no esta
console.log(cadena.indexOf("C4") < 0 ? "C4 no esta" : "C4 si esta");

//LastindexOf(): Devueleve la posicion de la ultima aparicon y -1 sino esta.
let cad5 = "Los salones de campus son Sputnik Apolo Artemisa y Sputnik es el salon actual de C3";
console.log(cad5.indexOf("Sputnik", 10));
console.log(cad5.lastIndexOf("Sputnik", cad5.length -10));

//includes(): Devuelve verdadero o falso si una cadena esta contenida dentro de otra.
console.log(cad5.includes("Sputnik"));

//startwidth(): Devuelve tru o false si una cadena comienza con otra
console.log(cad5.startsWith("Sputnik"));