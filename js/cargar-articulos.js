
document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("contenedor-articulos");

  fetch("articulos.json")
    .then(response => response.json())
    .then(articulos => {
      articulos.forEach(articulo => {
        const card = document.createElement("div");
        card.className = "col-md-6 col-lg-4 mb-4";
        card.innerHTML = `
          <div class="card h-100 border-0 shadow-sm">
            <img src="${articulo.imagen}" class="card-img-top" alt="${articulo.titulo}">
            <div class="card-body">
              <h5 class="card-title">${articulo.titulo}</h5>
              <p class="card-text text-muted">${articulo.resumen}</p>
              <a href="${articulo.link}" class="btn btn-sm btn-outline-primary">Leer más</a>
            </div>
            <div class="card-footer text-muted small">${new Date(articulo.fecha).toLocaleDateString()}</div>
          </div>
        `;
        contenedor.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error al cargar los artículos:", error);
      contenedor.innerHTML = "<p class='text-danger'>No se pudieron cargar los artículos.</p>";
    });
});
