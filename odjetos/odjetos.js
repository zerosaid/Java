const persona = {
    nombre: "Dani",
    edad: 20,
    estrabajador: true,
    familia: ["Miguel", "Maria"],
    direccion: {
        calle: "Calle de la piruleta",
        numero: 13,
        ciudad: "Barcelona" 
    },
    caminar:function(){
        console.log("Estoy caminando");
    }
};

console.log(persona.nombre);
console.log(persona["estrabajador"]);
console.log(persona.familia[1]);
console.log(persona.direccion.ciudad);
persona.caminar();
persona.direccion.ciudad = "Madrid";

console.log(persona);

const cadena = JSON.stringify(persona);
console.log("*".repeat(20));
console.log(cadena)
console.log("*".repeat(20));
const persona2= JSON.parse(cadena);
console.log(persona2)


