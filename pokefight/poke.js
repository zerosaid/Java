const miPokeBtn = document.querySelector('.mypoke button');
const fightBtn = document.querySelector('button[onclick="pelear()"]');
const miPokeDiv = document.querySelector('.mypoke');
const cpuPokeDiv = document.querySelector('.cpupoke');

let miPoke = null;
let cpuPoke = null;

miPokeBtn.addEventListener('click', async () => {
    const poke = await obtenerPokemonAleatorio();
    miPoke = poke;
    mostrarPokemon(miPoke, miPokeDiv);
});

async function pelear() {
    miPokeDiv.classList.remove('gano', 'perdio');
    cpuPokeDiv.classList.remove('gano', 'perdio');

    const divResultado = document.getElementById('resultado');
    divResultado.style.display = 'none';
    divResultado.textContent = '';

    if (!miPoke) {
        alert("¡Primero elige tu Pokémon!");
        return;
    }

    cpuPoke = await obtenerPokemonAleatorio();
    mostrarPokemon(cpuPoke, cpuPokeDiv);

    setTimeout(() => {
        iniciarPelea(miPoke, cpuPoke);
    }, 5000);
}


async function obtenerPokemonAleatorio() {
    const id = Math.floor(Math.random() * 1025) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    return {
        nombre: data.name,
        imagen: data.sprites.other['official-artwork'].front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        base_experience: data.base_experience
    };
}

function mostrarPokemon(pokemon, contenedor) {
    contenedor.querySelector('img').src = pokemon.imagen;
    const stats = contenedor.querySelectorAll('li');
    stats[0].textContent = `Name: ${pokemon.nombre}`;
    stats[1].textContent = `Hp: ${pokemon.hp}`;
    stats[2].textContent = `Attack: ${pokemon.attack}`;
    stats[3].textContent = `Defense: ${pokemon.defense}`;
    stats[4].textContent = `Speed: ${pokemon.speed}`;
}


function iniciarPelea(p1, p2) {
    let hp1 = p1.hp;
    let hp2 = p2.hp;
    const var_turno = Math.abs(p1.speed - p2.speed);

    for (let i = 0; i < var_turno; i++) {
        if (p1.speed >= p2.speed) {
            hp2 -= calcularDano(p1, p2);
            if (hp2 <= 0) break;
        } else {
            hp1 -= calcularDano(p2, p1);
            if (hp1 <= 0) break;
        }
    }

    miPokeDiv.classList.remove('gano', 'perdio');
    cpuPokeDiv.classList.remove('gano', 'perdio');

    let resultado = '';
    if (hp1 > 0 && hp2 <= 0) {
        resultado = "¡GANASTE!";
        miPokeDiv.classList.add('gano');
        cpuPokeDiv.classList.add('perdio');
    } else if (hp2 > 0 && hp1 <= 0) {
        resultado = "Perdiste...";
        miPokeDiv.classList.add('perdio');
        cpuPokeDiv.classList.add('gano');
    } else {
        resultado = "Empate";
    }

    const divResultado = document.getElementById('resultado');
    divResultado.className = '';
    divResultado.style.display = 'block';

    if (resultado === "¡GANASTE!") {
        divResultado.classList.add('resultado-ganar');
    } else if (resultado === "Perdiste...") {
        divResultado.classList.add('resultado-perder');
    } else {
        divResultado.classList.add('resultado-empate');
    }

    divResultado.textContent = resultado;

}


function calcularDano(atacante, defensor) {
    return Math.max(1, Math.round(atacante.attack - defensor.defense * 0.5));
}

document.addEventListener('DOMContentLoaded', async () => {
    const miContenedor = document.querySelector('.mypoke');
    const cpuContenedor = document.querySelector('.cpupoke');

    const miPokemon = await obtenerPokemonAleatorio();
    const cpuPokemon = await obtenerPokemonAleatorio();

    mostrarPokemon(miPokemon, miContenedor);
    mostrarPokemon(cpuPokemon, cpuContenedor);
});
