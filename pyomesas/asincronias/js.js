const fetchPromesa= fetch("https://jsonplaceholder.typicode.com/todos/10")

fetchPromesa
    .then(RES => RES.json())
    .then (RTA=> console.log(RTA))
    .catch(error => console.log(error.message));

//Opciones con fetch
