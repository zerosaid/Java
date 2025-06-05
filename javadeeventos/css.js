document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("usuarios");

    async function obtenerUsuarios() {
        try {
            const respuesta = await fetch("https://randomuser.me/api/?results=6");
            const datos = await respuesta.json();
            mostrarUsuarios(datos.results);
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
        }
    }

    function mostrarUsuarios(usuarios) {
        contenedor.innerHTML = "";
      
        usuarios.forEach((usuario) => {
          const tarjeta = document.createElement("div");
          tarjeta.classList.add("tarjeta-usuario");
          tarjeta.innerHTML = `
            <img src="${usuario.picture.large}" alt="Foto de ${usuario.name.first}">
            <h3>${usuario.name.title} ${usuario.name.first} ${usuario.name.last}</h3>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Teléfono:</strong> ${usuario.phone}</p>
            <p><strong>Edad:</strong> ${usuario.dob.age}</p>
            <p><strong>Género:</strong> ${usuario.gender}</p>
            <p><strong>Ubicación:</strong> ${usuario.location.city}, ${usuario.location.state}</p>
            <p><strong>País:</strong> ${usuario.location.country}</p>
          `;
          tarjeta.addEventListener("dblclick", () => mostrarDetalles(usuario));
          contenedor.appendChild(tarjeta);
        });
    }

    function mostrarDetalles(usuario) {
        const detallesDiv = document.getElementById("detalles"); 
        detallesDiv.innerHTML = `
            <img src="${usuario.picture.large}" alt="Foto de ${usuario.name.first}">
            <h3>${usuario.name.title} ${usuario.name.first} ${usuario.name.last}</h3>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Teléfono:</strong> ${usuario.phone}</p>
            <p><strong>Edad:</strong> ${usuario.dob.age}</p>
            <p><strong>Género:</strong> ${usuario.gender}</p>
            <p><strong>Ubicación:</strong> ${usuario.location.city}, ${usuario.location.state}</p>
            <p><strong>País:</strong> ${usuario.location.country}</p>
            <button onclick="cerrarDetalles()">Cerrar</button>
        `;
        detallesDiv.style.display = "block";
    }

    obtenerUsuarios(); 
});

function cerrarDetalles() {
    const detallesDiv = document.getElementById("detalles");
    detallesDiv.style.display = "none";
}
