function responderPreguntaSofia(){
    const parrafo = document.getElementById("pregunta-sofia")
    parrafo.textContent="Mimiendo"
}

function cambiarcolorcamper() {
    const campers = document.getElementsByClassName("camper");
    for (let i = 0; i < campers.length; i++){
        campers[i].style.color = "red";

    }
}

function chekearListaMercado(){
    const elementosMercado = document.getElementsByTagName("li");
    for (let i = 0; i < elementosMercado.length; i++){
        elementosMercado[i].textContent = elementosMercado[i].textContent + " ✅";
    }
}

function cambiarBienvenida(){
    const bienvenida = document.querySelector(".bienvenida");
    bienvenida.style.backgroundColor = "pink";
}

function verAlt(){
    const imagen = document.querySelector(".imagen-gato");
    console.log(imagen.getAttribute("alt"));
}

function cambiarimagen(){
    const imagen = document.querySelector(".imagen-gato");
    imagen.setAttribute("src", "./gato2.jpeg");
}

function verAtributos(){
    const imagen = document.querySelector(".img");
    const atributos = imagen.getAttributeNames();

    for (const atributo of atributos) {
        console.log(atributo + " -- " + imagen.getAttribute(atributo));
    }
}
