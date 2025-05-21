async function getpoke(nombre){
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`
    
    const respuesta = await fetch(url);

    if (!respuesta.ok){
        throw new Error("Error. Pokemon no existe.");
    }

    const json = await respuesta.json();

    return json.sprites.front_default;
}

(async function() {
    try {
        let urlImg = await getpoke("eevee")
        console.log(urlImg);

        urlImg = await getpoke("vaporeon")
        console.log(urlImg);

        urlImg = await getpoke("wobbuffet")
        console.log(urlImg);
    } catch (error){
        console.error(error.message);
    }
})();