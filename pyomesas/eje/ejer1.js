let granos = [
    { Granos: "Arábica" },
    { Granos: "Robusta" },
    { Granos: "Excelsa" },
];

function crearPromesa(resultado, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(resultado);
        }, tiempo);
    });
}

function hacerCafe() {
    console.log("Bienvenido");

    const pedirGranos = () => granos;

    async function pedirGranosasyncawait() {
        try {
            const datosObtenidos = await crearPromesa(pedirGranos(), 2500);
            console.table(datosObtenidos);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function prepararCafe() {
        try {
            await crearPromesa("Grano seleccionado.", 3500).then(console.log);
            await crearPromesa("Haciendo el café.", 4000).then(console.log);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function servirCafe() {
        try {
            await crearPromesa("Sirviendo el café en la mesa 5", 5000).then(console.log);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function procesoCafe() {
        await pedirGranosasyncawait();
        await prepararCafe();
        await servirCafe();
    }

    procesoCafe();
}

hacerCafe();
