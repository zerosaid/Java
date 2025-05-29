const boton = document.getElementById("mostrar");

boton.addEventListener("click", async () => {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    const tabla = document.createElement("table");
    const head = document.createElement("thead");
    const body = document.createElement("tbody");

    const filaEncabezado = document.createElement("tr");
    const columnas = ["Name", "Type", "Height", "Weight", "Img"];
    columnas.forEach(columna => {
        const th = document.createElement("th");
        th.textContent = columna;
        filaEncabezado.appendChild(th);
    });

    head.appendChild(filaEncabezado);
    tabla.appendChild(head);
    tabla.appendChild(body);
    contenedor.appendChild(tabla);

    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
        const data = await res.json();
        const pokemons = data.results;

        function chunkArray(arr, size) {
            const chunks = [];
            for (let i = 0; i < arr.length; i += size) {
                chunks.push(arr.slice(i, i + size));
            }
            return chunks;
        }

        const chunks = chunkArray(pokemons, 100);

        for (const chunk of chunks) {

            const promises = chunk.map(async poke => {
                const res = await fetch(poke.url);
                return await res.json();
            });

            const infos = await Promise.all(promises);

            infos.forEach(info => {
                const fila = document.createElement("tr");

                const nombre = document.createElement("td");
                nombre.textContent = info.name;

                const tipo = document.createElement("td");
                tipo.textContent = info.types.map(t => t.type.name).join(", ");

                const altura = document.createElement("td");
                altura.textContent = info.height;

                const peso = document.createElement("td");
                peso.textContent = info.weight;

                const imagen = document.createElement("td");
                const img = document.createElement("img");
                img.src = info.sprites.front_default || "";
                img.alt = info.name;
                img.style.width = "80px";
                img.style.height = "auto";
                imagen.appendChild(img);

                fila.appendChild(nombre);
                fila.appendChild(tipo);
                fila.appendChild(altura);
                fila.appendChild(peso);
                fila.appendChild(imagen);

                body.appendChild(fila);
            });

            await new Promise(resolve => setTimeout(resolve, 500));
        }
    } catch (error) {
        const errorEl = document.createElement("h3");
        errorEl.textContent = "Error al traer los Pokémon 😔";
        contenedor.appendChild(errorEl);
    }
});

