//CONJUNTOS SET()

//Crear 
const letras = new Set (["a","b","c"]);
console.log(letras)

// Agregar valores 
letras.add("a"); 
letras.add("d"); 
letras.add("e");
console.log(letras);

// Eliminar valores
console.log(letras.delete("b"));
console.log(letras.delete("b"));f
console.log(letras);

// Verificar si un elemento existe
coconsole.log(letras.has("b"));
coconsole.log(letras.has("a"));

// Iterar
let strLetras= "";
letras.forEach(valor => strLetras += valor);
console.log(strLetras)

strLetras = "";
for(letra of letras) {
    strLetras += letra;
}

console.log(strLetras);

// Tamaño del conjunti: propiedad size()
console.log(letras.size)

// Limpiar el conjunto
letras.clear()
console.log(letras);
delete letras;
console.log(letras);
console.log("Hi")