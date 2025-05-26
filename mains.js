const url = new URL("https://www.isabelacarrillo.com/perfil?name=")

console.log(url.protocol)
console.log(url.hostname)
console.log(url.host)

console.log(typeof(url.search))
console.log(url.search)

let parametros = url.searchParams;
parametros.append("mejoramigo", "jesus")

console.log(url)