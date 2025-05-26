
// Arrays locales (pueden eliminarse si no los necesitas localmente)
let listaDueños = [];
let listaMascotas = [];

const getById = (id) => document.getElementById(id);
const limpiarVista = () => {
    getById("formulario").innerHTML = "";
    getById("resultado").innerHTML = "";
};

const mostrarMensaje = (texto, tipo = "info") => {
    const resultado = getById("resultado");
    resultado.innerText = texto;
    resultado.style.color = tipo === "error" ? "red" : tipo === "ok" ? "green" : "black";
};

// Registrar dueño
const registrarDueño = (callback) => {
    const form = getById("formDueño");
    const datos = Object.fromEntries(new FormData(form));
    const { nombre, cedula, telefono, correo } = datos;

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[0-9]{7,10}$/;

    if (!nombre || !cedula || !telefono || !correo) {
        callback("Por favor completa todos los campos.");
        return;
    }

    if (!correoRegex.test(correo)) {
        callback("Correo inválido.");
        return;
    }

    if (!telefonoRegex.test(telefono)) {
        callback("Número de teléfono inválido (solo dígitos, 7 a 10 números).");
        return;
    }

    db.ref("dueños/" + cedula).once("value", (snapshot) => {
        if (snapshot.exists()) {
            callback("Ya existe un dueño con esa cédula.");
        } else {
            db.ref("dueños/" + cedula).set(datos)
                .then(() => {
                    listaDueños.push(datos);
                    callback("✅ Dueño registrado correctamente.");
                })
                .catch((error) => callback("Error: " + error.message));
        }
    });
};

// Registrar mascota
const registrarMascota = (callback) => {
    const form = getById("formMascota");
    const datos = Object.fromEntries(new FormData(form));
    const id = listaDueños[listaDueños.length - 1]?.cedula;

    if (!id) {
        callback("Error: primero debes registrar un dueño.");
        return;
    }

    db.ref("mascotas/" + id).set(datos)
        .then(() => {
            listaMascotas.push(datos);
            callback("✅ Mascota registrada correctamente.");
        })
        .catch((error) => callback("Error al registrar mascota: " + error.message));
};

// Listar registros
const listar = () => {
    limpiarVista();
    const resultado = getById("resultado");

    db.ref("dueños").once("value", (snapshot) => {
        const dueños = snapshot.val();
        if (!dueños) {
            mostrarMensaje("No hay datos registrados.", "info");
            return;
        }

        db.ref("mascotas").once("value", (snapMascotas) => {
            const mascotas = snapMascotas.val() || {};

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
                ${Object.keys(dueños).map((id) => {
                const d = dueños[id];
                const m = mascotas[id] || {};
                return `
                        <tr>
                          <td>${d.nombre}</td><td>${d.cedula}</td><td>${d.telefono}</td><td>${d.correo}</td>
                          <td>${m.nombre2 || "-"}</td><td>${m.especie || "-"}</td><td>${m.edad || "-"}</td><td>${m.peso || "-"}</td><td>${m.salud || "-"}</td>
                        </tr>`;
            }).join("")}
            `;
            resultado.appendChild(tabla);
        });
    });
};

// Buscar por cédula
const buscar = () => {
    const cedula = getById("buscarCedula").value.trim();
    limpiarVista();

    if (!cedula) {
        mostrarMensaje("Por favor ingresa una cédula.", "error");
        return;
    }

    db.ref("dueños/" + cedula).once("value", (snapDueño) => {
        const dueño = snapDueño.val();
        if (!dueño) {
            mostrarMensaje("No se encontró un dueño con esa cédula.", "error");
            return;
        }

        db.ref("mascotas/" + cedula).once("value", (snapMascota) => {
            const mascota = snapMascota.val();
            getById("resultado").innerHTML = `
                <h3>Resultado:</h3>
                <p><strong>Dueño:</strong> ${dueño.nombre}, Tel: ${dueño.telefono}, Correo: ${dueño.correo}</p>
                <p><strong>Mascota:</strong> ${mascota?.nombre2 || "-"}, Especie: ${mascota?.especie || "-"}, Edad: ${mascota?.edad || "-"}</p>
            `;
        });
    });
};

// Actualizar datos del dueño
const actualizar = () => {
    const cedula = getById("actCedula").value.trim();
    const nuevoTelefono = getById("actTelefono").value.trim();
    const nuevoCorreo = getById("actCorreo").value.trim();

    if (!cedula || !nuevoTelefono || !nuevoCorreo) {
        mostrarMensaje("Por favor completa todos los campos.", "error");
        return;
    }

    db.ref("dueños/" + cedula).once("value", (snapshot) => {
        if (snapshot.exists()) {
            db.ref("dueños/" + cedula).update({
                telefono: nuevoTelefono,
                correo: nuevoCorreo
            }).then(() => mostrarMensaje("✅ Datos actualizados.", "ok"))
                .catch((error) => mostrarMensaje("Error: " + error.message, "error"));
        } else {
            mostrarMensaje("Dueño no encontrado.", "error");
        }
    });
};

// Eliminar dueño y mascota
const eliminar = () => {
    const cedula = getById("elimCedula").value.trim();
    const nombreMascota = getById("elimNombreMascota").value.trim().toLowerCase();

    if (!cedula || !nombreMascota) {
        mostrarMensaje("Por favor ingresa la cédula y el nombre de la mascota.", "error");
        return;
    }

    db.ref("mascotas/" + cedula).once("value", (snapMascota) => {
        const mascota = snapMascota.val();
        if (mascota && mascota.nombre2.toLowerCase() === nombreMascota) {
            const confirmacion = confirm(`¿Estás seguro de eliminar al dueño con cédula ${cedula} y su mascota ${mascota.nombre2}?`);
            if (!confirmacion) {
                mostrarMensaje("Eliminación cancelada.", "info");
                return;
            }

            db.ref("mascotas/" + cedula).remove();
            db.ref("dueños/" + cedula).remove()
                .then(() => mostrarMensaje("✅ Mascota y dueño eliminados correctamente.", "ok"));
        } else {
            mostrarMensaje("No se encontró una mascota con esos datos.", "error");
        }
    });
};