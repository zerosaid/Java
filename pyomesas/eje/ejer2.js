function crearPromesa(resultado, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(resultado);
        }, tiempo);
    });
}

async function paso1() {
    try {
        await crearPromesa("Obteniendo ingrdientes", 2000).then(console.log);
    } catch (error) {
        console.error(error.message);
    }
}

async function paso2() {
    try {
        await crearPromesa("Mezclando los ingredientes", 1000).then(console.log);
    } catch (error) {
        console.error(error.message);
    }
}

async function paso3() {
    try {
        await crearPromesa("Cocinando los ingredientes", 3000).then(console.log);
    } catch (error) {
        console.error(error.message);
    }
}

async function listo() {
    try {
        await crearPromesa("Receta lista!", 3000).then(console.log);
    } catch (error) {
        console.error(error.message);
    }
}

async function recetalista() {
    await paso1();
    await paso2();
    await paso3();
    await listo()
}

recetalista()