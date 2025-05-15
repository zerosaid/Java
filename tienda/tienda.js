let inventario = [];

function agregarProducto() {
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (nombre && !isNaN(precio) && !isNaN(cantidad)) {
        inventario.push({ nombre, precio, cantidad });
        limpiarCampos();
        actualizarTabla();
    } else {
        alert("Por favor completa todos los campos correctamente.");
    }
}

function eliminarProducto() {
    const nombre = document.getElementById('buscarNombre').value.toLowerCase();
    const index = inventario.findIndex(p => p.nombre.toLowerCase() === nombre);
    
    if (index !== -1) {
        inventario.splice(index, 1);
        actualizarTabla();
    } else {
        alert("Producto no encontrado.");
    }
}

function buscarProducto() {
    const nombre = document.getElementById('buscarNombre').value.toLowerCase();
    const producto = inventario.find(p => p.nombre.toLowerCase() === nombre);

    if (producto) {
        alert(`Nombre: ${producto.nombre}\nPrecio: $${producto.precio}\nCantidad: ${producto.cantidad}`);
    } else {
        alert("Producto no encontrado.");
    }
}

function actualizarTabla() {
    const tabla = document.getElementById('tablaInventario');
    tabla.innerHTML = "";

    inventario.forEach(p => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${p.nombre}</td>
            <td>$${p.precio.toFixed(2)}</td>
            <td>${p.cantidad}</td>
        `;
        tabla.appendChild(fila);
    });
}

function limpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('cantidad').value = '';
}
