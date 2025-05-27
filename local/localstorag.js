var usuarios = {};

function registrarUsuario(){
    if (usuarios == null){
        usuarios = {};
    }
    var nombre = prompt("Ingrese su nombre");
    var telefono = prompt("Ingrese su telefono");
    var documento = prompt("Ingrese su documento");
    var edad = Number(prompt("Ingrese su edad"));
    let usuario = {
        nombre: nombre,
        telefono: telefono,
        documento: documento,
        edad: edad,
    }
    usuarios[documento] = usuario;
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

function MostrarUsuarios(){
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    for(let llave in usuarios){
        console.log("**************************")
        console.log("usuario con documento -> " +llave);
        console.log(usuarios[llave])
        console.log("**************************")        
    }
}

function actualizar() {
    var documento = prompt("Ingrese el documento del usuario que desea actualizar");
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    
    if (!usuarios || !usuarios[documento]) {
        alert("Usuario no encontrado.");
        return;
    }

    var nuevoTelefono = prompt("Ingrese el nuevo teléfono:");
    var nuevaEdad = prompt("Ingrese la nueva edad:");
    var nuevoNombre = prompt("Ingrese el nuevo nombre:");

    usuarios[documento] = {
        nombre: nuevoNombre,
        telefono: nuevoTelefono,
        documento: documento,
        edad: Number(nuevaEdad)
    };

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuario actualizado correctamente.");
}

function eliminar() {
    var documento = prompt("Ingrese el documento del usuario que desea eliminar");
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    
    if (!usuarios || !usuarios[documento]) {
        alert("Usuario no encontrado.");
        return;
    }

    delete usuarios[documento]; 

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuario eliminado correctamente.");
}


do {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    opc = parseInt(prompt("Elige una opción:\n1. Para crear un usuario \n2. Para mostrar un usuario.\n3. Para actualizar usuario.\n4. Para eleminar usuarios.\n0. Salir"));

switch (opc) {
    case 1:
    registrarUsuario();
    break;
    case 2:
    MostrarUsuarios();
    break;
    case 3:
    actualizar();
    break;
    case 4:
    eliminar();
    break;
    case 0:
    alert("¡Hasta luego! Cuídate.");
    break;
    default:
    alert("Por favor, lee bien las opciones.");
}
} while (opc !== 0);
