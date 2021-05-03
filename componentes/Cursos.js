MiAplicacion.component("componente-cursos", {
  template:/*html */
    `
    <section class="cursos">
        <componente-curso 
          v-for="curso in cursos"
          :key="curso.nombre"
          :curso="curso"
          @seleccionar-el-curso="seleccionarElCurso"
          @agregar-al-carrito="agregarAlCarrito"
          ></componente-curso>
      </section>
    `,
  props: ["cursos"],
  emits: ["seleccionarCurso", "agregarCarrito"],
  methods: {
    seleccionarElCurso(objCurso) {
      this.$emit('seleccionarCurso', objCurso)
    },
    agregarAlCarrito(objCurso) {
      this.$emit('agregarCarrito', objCurso)
    }
  },
})