fetch("http://localhost:3000/posts?author=campuslands", {
    method: "DELETE",
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.error("Error al hacer fetch:", err));
