let Texto = "Este es un ejemplo de un texto que es ideal para procesar";

const arrtexto = Texto.split(" ");

const mapPal = new Map();

arrtexto.forEach(pal => mapPal.set(pal, 
        mapPal.has(pal) ? mapPal.get(pal)+1: 1));

mapPal.forEach((v, k) => console.log(k, `|` , v));

