const contenedor = document.getElementById("contenedor");

const tabla = document.createElement("table");
const head = document.createElement("thead");
const body = document.createElement("tbody");

const filaENcabezado =  document.createElement("tr")
const columnas = ["Nombre", "Altura","Peso", "Color de cabello"]
columnas.forEach(columna => {
    const th = document.createElement("th");
    th.textContent = columna;
    filaENcabezado.appendChild(th);
})

head.appendChild(filaENcabezado)
tabla.appendChild(head)
tabla.appendChild(body)

contenedor.appendChild(tabla)

fetch("https://swapi.info/api/people")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        datos.forEach((personaje) => {
        const fila = document.createElement("tr");

        const nombre = document.createElement("td");
        nombre.textContent = personaje.name;
        const altura = document.createElement("td");
        altura.textContent = personaje.height;
        const peso = document.createElement("td");
        peso.textContent = personaje.mass;
        const cabello = document.createElement("td");
        cabello.textContent = personaje.hair_color;

        fila.appendChild(nombre);
        fila.appendChild(altura);
        fila.appendChild(peso);
        fila.appendChild(cabello);

        body.appendChild(fila)
        });
    })
    .catch((er)=>{
        const error = document.createElement("h3");
        error.textContent = "Error al traer personajes 😔";
        contenedor.appendChild(error);
    });