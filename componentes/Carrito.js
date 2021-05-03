MiAplicacion.component("componente-carrito", {
  template:/*html */
    `
    <section class="carrito">
      <h3>Carrito</h3>
      <ul class="carrito__lista" v-if="carrito.length>0">
        <li v-for="objCurso in carrito" :key="objCurso.id">
          <h5>{{objCurso.nombre}}</h5>
          <p><strong>Precio:</strong><span>$ {{objCurso.precio}}</span></p>
        </li>
      </ul>
      <div v-else style="text-align: center;">
        <small>No hay cursos en el carrito</small>
      </div>
      <div class="carrito__total">
        <strong>Total</strong> <span> $ {{ total.toFixed(2) }}</span>
      </div>
    </section>
    `,
  props: ["carrito", "total"]
})