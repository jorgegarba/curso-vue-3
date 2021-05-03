MiAplicacion.component("componente-curso", {
  template:/*html */
    `
  <div class="curso" :class="{
    'curso-disponible': curso.disponible,
    'curso-no-disponible': !curso.disponible 
  }" @click="$emit('seleccionarElCurso',curso)">
    <figure class="curso__imagen" :style="{padding:'8px'}">
      <p class="curso__descuento" v-if="curso.descuento">
        {{curso.descuento}}%
      </p>
      <img :src="'./assets/'+curso.imagen" alt="">
    </figure>
    <div class="curso__info">
      <h4>{{curso.nombre}}</h4>
      <p class="curso__descripcion">
        {{curso.descripcion}}
      </p>
      <div class="curso__caracteristicas">
        <span>
          <i class="fas fa-clock"></i> {{curso.duracion}} horas
        </span>
        <span>
          <i class="fas fa-money-check "></i> {{curso.precio}} dólares
        </span>
        <span :class="{disponible: curso.disponible, 'no-disponible':!curso.disponible}"
          :style="{fontSize:'0.8rem'}">
          {{curso.disponible ? 'disponible':'no disponible'}}
        </span>
      </div>
    </div>
    <div class="curso__acciones" v-if="curso.disponible">
      <button class="btn__comprar btn-success" @click="$emit('agregarAlCarrito',curso)">
        <i class="fas fa-shopping-cart"></i>
      </button>
    </div>

  </div>
  `,
  props:["curso"],
  emits:["agregarAlCarrito","seleccionarElCurso"]
})