let listaDueños = [];
let listaMascotas = [];

// Utilidades
const getById = (id) => document.getElementById(id);
const limpiarVista = () => {
    getById("formulario").innerHTML = "";
    getById("resultado").innerHTML = "";
};

// Registrar dueño
const registrarDueño = (callback) => {
    const form = getById("formDueño");
    const datos = Object.fromEntries(new FormData(form));
    listaDueños.push(datos);
    callback("Dueño registrado correctamente.");
};

// Registrar mascota
const registrarMascota = (callback) => {
    const form = getById("formMascota");
    const datos = Object.fromEntries(new FormData(form));
    listaMascotas.push(datos);
    callback("Mascota registrada correctamente.");
};

// Listar
const listar = () => {
    limpiarVista();
    if (listaDueños.length === 0) {
        getById("resultado").innerText = "No hay datos registrados.";
        return;
    }

    const tabla = document.createElement("table");
    tabla.border = "1";
    tabla.innerHTML = `
        <tr>
        <th colspan="4">Dueño</th>
        <th colspan="5">Mascota</th>
        </tr>
        <tr>
        <th>Nombre</th><th>Cédula</th><th>Teléfono</th><th>Correo</th>
        <th>Nombre</th><th>Especie</th><th>Edad</th><th>Peso</th><th>Salud</th>
        </tr>
        ${listaDueños
            .map((d, i) => {
                const m = listaMascotas[i] || {};
                return `<tr>
            <td>${d.nombre}</td><td>${d.cedula}</td><td>${d.telefono}</td><td>${d.correo
                    }</td>
            <td>${m.nombre2 || "-"}</td><td>${m.especie || "-"}</td><td>${m.edad || "-"
                    }</td><td>${m.peso || "-"}</td><td>${m.salud || "-"}</td>
        </tr>`;
            })
            .join("")}
    `;
    getById("resultado").appendChild(tabla);
};

// Buscar
const buscar = () => {
    const cedula = getById("buscarCedula").value;
    const index = listaDueños.findIndex((d) => d.cedula === cedula);
    limpiarVista();
    if (index !== -1) {
        const dueño = listaDueños[index];
        const mascota = listaMascotas[index];
        getById("resultado").innerHTML = `
        <h3>Resultado:</h3>
        <p>Dueño: ${dueño.nombre}, Tel: ${dueño.telefono}, Correo: ${dueño.correo}</p>
        <p>Mascota: ${mascota.nombre2}, Especie: ${mascota.especie}, Edad: ${mascota.edad}</p>
        `;
    } else {
        getById("resultado").innerText =
            "No se encontró un registro con esa cédula.";
    }
};

// Actualizar
const actualizar = () => {
    const cedula = getById("actCedula").value;
    const index = listaDueños.findIndex((d) => d.cedula === cedula);
    if (index !== -1) {
        listaDueños[index].telefono = getById("actTelefono").value;
        listaDueños[index].correo = getById("actCorreo").value;
        getById("resultado").innerText = "Datos actualizados.";
    } else {
        getById("resultado").innerText = "Dueño no encontrado.";
    }
};

// Eliminar (con cédula y nombre de mascota)
const eliminar = () => {
    const cedula = getById("elimCedula").value.trim();
    const nombreMascota = getById("elimNombreMascota").value.trim().toLowerCase();

    if (!cedula || !nombreMascota) {
        getById("resultado").innerText =
            "Por favor ingresa la cédula y el nombre de la mascota.";
        return;
    }

    const indexMascota = listaMascotas.findIndex(
        (m, i) =>
            listaDueños[i]?.cedula === cedula &&
            m.nombre2?.toLowerCase() === nombreMascota
    );

    if (indexMascota !== -1) {
        listaDueños.splice(indexMascota, 1);
        listaMascotas.splice(indexMascota, 1);
        getById("resultado").innerText = "Mascota eliminada correctamente.";
    } else {
        getById("resultado").innerText =
            "No se encontró una mascota con esos datos.";
    }
};

// Mostrar formularios según acción
let formularioVisible = null;  // Guarda qué formulario está visible ahora

const mostrarFormulario = (tipo) => {
    const cont = getById("formulario");

    if (formularioVisible === tipo) {
        // Si el formulario ya está visible, lo ocultamos
        cont.innerHTML = "";
        getById("resultado").innerHTML = "";
        formularioVisible = null;
        return;
    }

    // Si no, mostramos el formulario solicitado
    limpiarVista();
    formularioVisible = tipo;

    switch (tipo) {
        case "dueño":
            cont.innerHTML = `
            <form id="formDueño">
            <input name="nombre" placeholder="Nombre" required><br>
            <input name="cedula" placeholder="Cédula" required><br>
            <input name="telefono" placeholder="Teléfono" required><br>
            <input name="correo" placeholder="Correo" required><br>
            <button type="button" onclick="registrarDueño((msg) => getById('resultado').innerText = msg)">Guardar</button>
            </form>
        `;
            break;

        case "mascota":
            cont.innerHTML = `
            <form id="formMascota">
            <input name="nombre2" placeholder="Nombre Mascota" required><br>
            <input name="especie" placeholder="Especie" required><br>
            <input name="edad" placeholder="Edad" required><br>
            <input name="peso" placeholder="Peso" required><br>
            <input name="salud" placeholder="Estado de salud" required><br>
            <button type="button" onclick="registrarMascota((msg) => getById('resultado').innerText = msg)">Guardar</button>
            </form>
        `;
            break;

        case "buscar":
            cont.innerHTML = `
            <input id="buscarCedula" placeholder="Cédula a buscar"><br>
            <button onclick="buscar()">Buscar</button>
        `;
            break;

        case "actualizar":
            cont.innerHTML = `
            <input id="actCedula" placeholder="Cédula"><br>
            <input id="actTelefono" placeholder="Nuevo Teléfono"><br>
            <input id="actCorreo" placeholder="Nuevo Correo"><br>
            <button onclick="actualizar()">Actualizar</button>
        `;
            break;

        case "eliminar":
            cont.innerHTML = `
            <input id="elimCedula" placeholder="Cédula del dueño"><br>
            <input id="elimNombreMascota" placeholder="Nombre de la mascota"><br>
            <button onclick="eliminar()">Eliminar</button>
        `;
            break;
    }
};
