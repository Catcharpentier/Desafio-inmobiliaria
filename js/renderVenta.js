// Función reutilizable para renderizar propiedades
function renderizarPropiedades(lista, contenedorId, max = lista.length) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = '';
  
    for (let i = 0; i < Math.min(lista.length, max); i++) {
      const propiedad = lista[i];
      contenedor.innerHTML += `
        <div class="propiedad">
          <img src="${propiedad.src}" alt="${propiedad.nombre}">
          <h3>${propiedad.nombre}</h3>
          <p>${propiedad.descripcion}</p>
          <p><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
          <p><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
          <p><strong>Precio:</strong> $${propiedad.costo.toLocaleString()}</p>
          <p>
            ${propiedad.smoke ? '🚬 Permitido fumar' : '🚭 No se permite fumar'} |
            ${propiedad.pets ? '🐶 Se aceptan mascotas' : '🚫 No se aceptan mascotas'}
          </p>
        </div>
      `;
    }
  }
  