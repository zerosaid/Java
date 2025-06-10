fetch("http://localhost:3000/posts?autor=campuslands")
  .then(response => response.json())
  .then(posts => {
    if (posts.length === 0) {
      throw new Error("No se encontraron posts con autor 'campuslands'");
    }

    return Promise.all(
      posts.map(post =>
        fetch(`http://localhost:3000/posts/${post.id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => console.log(`✅ Post eliminado (ID: ${post.id})`, data))
      )
    );
  })
  .catch(error => console.error("❌ Error al eliminar:", error));
