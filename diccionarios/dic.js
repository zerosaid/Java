// Crear
let dicc = new Map([["manzana", 500],["bananos",300], ["ordenes",200]])
console.log(dicc)

// agregar
dicc.set("peras",500);
dicc.set("duraznos", 600);
console.log(dicc);

// odtener un valor
console.log(dicc.get("peras"));

// borrar una entrada
console.log(dicc.delete("peras"));
console.log(dicc.delete("kiwi"));
console.log(dicc)

// si una llave existe
console.log(dicc.has("naranjas"));
console.log(dicc.has("manzanas"));

// iterar el diccionario
dicc.forEach((llave, valor) => console.log(llave, "->" , valor));

//metodo entries()-> devuelve un iteraador a las parejas llave:valor
let text ="";
for(const pareja of dicc.entries()){
    text+=pareja+" - ";
}
console.log(text);

for(const[k, v] of dicc.entries()) {
    text += k + "->" + v + " - ";
}
console.log(text);

// llave
text = "llave del diccionario: "
for(const k of dicc.keys())
    text += k + ", ";
console.log(text)

// valores
text = "Valores del diccionario: "
for(const k of dicc.values())
    text += k + ", ";
console.log(text)