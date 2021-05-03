MiAplicacion.component("curso-seleccionado", {

  template:/*html */
    `
    <section class="seleccionado">
    <h3>Curso Seleccionado</h3>
    <div v-if="cursoSeleccionado">
      <figure class="seleccionado__img">
        <img :src="'assets/'+cursoSeleccionado.imagen" alt="">
      </figure>
      <h4 class="seleccionado__title">{{cursoSeleccionado.nombre}}</h4>
      <p class="seleccionado__desc">
        {{cursoSeleccionado.descripcion}}
      </p>
      <p class="seleccionado__disponible">
        <span class="disponible" v-if="cursoSeleccionado.disponible">Disponible</span>
        <span class="no-disponible" v-else>No disponible</span>
      </p>
      <p class="seleccionado__horas">
        <span>
          <i class="fas fa-clock"></i> {{cursoSeleccionado.duracion}} horas
        </span>
      </p>
      <p class="seleccionado__precio">
        <span>
          <i class="fas fa-money-check "></i> {{cursoSeleccionado.precio}} dólares
        </span>
      </p>
    </div>
    <p v-else>Ningún curso seleccionado</p>
  </section>
    `,
  props: ["cursoSeleccionado"]

});