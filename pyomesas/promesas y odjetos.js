let datos = [
    {
        id: 1,
        title: "Iron-Man",
        year: 2020,
    },
    {
        id: 2,
        title: "Spaider-Man: HomeComing",
        year: 2017,
    },
    {
        id: 3,
        title: "Avenger Endgame",
        year: 2019,
    },
]

//SINCRONO
const getdatos = () => {
    return datos;
}

// console.log("INICIO");
// console.log(getdatos());
// console.log("FIN");

//ASINCRONO
// const getdatosAsyncallback = callbak => {
//     setTimeout(()=> console.log(callbak()), 3000);
// };

// console.log("INICIO");
// getdatosAsyncallback(getdatos);
// console.log("FIN");

// ASINCRONO CON PROMESA
const getdatospromesas = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (datos.length > 0) {
            resolve(getdatos());
    } else {
        reject("Error. Sin datos")
    };
},3000);
});


console.log("INICIO");
getdatospromesas()
    .then((datos) => {console.table(datos);
    })
    .catch((error))
console.log("FIN");
