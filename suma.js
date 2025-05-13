// let edad = Number(prompt("Ingrese su edad"))

// if (edad < 18) {
//     alert("Usted es un niño!")
// } else if (edad < 50) {
//     alert("Usted es adulto!")
// }else {
//     alert("Usted es un adulto mayor!")
// }

// alert((edad < 18) ? "No Puede entrar" : "Puede entrar")
function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

let dia = capitalizar(prompt("Que dia es"))

switch (dia) {
    case "Lunes":
        console.log("Comienzo de la semana");
        break;
    case "Viernes":
        console.log("Fin de semana cerca");
        break;
    case "Sabado":
        console.log("Fín de semana")
        break;
    case "Domingo":
        console.log("Debes ir a misa")
        break;
    default:
        console.log("Día intermedio");
}