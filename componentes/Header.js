MiAplicacion.component("componente-header", {

  template: /*html */
    `
  <header class="header">
    <figure class="header__logo">
      <img src="./assets/vue.png" alt="">
    </figure>
    <div class="header__auth">
      <strong>Total</strong> $ {{total}}
      <button class="btn-success" v-if="!auth" @click="modificarLaSesion">Iniciar Sesión</button>
      <button class="btn-danger" v-else @click="modificarLaSesion">Cerrar Sesión</button>
    </div>
  </header>`,
  props: ["total", "auth"],
  emits: ["modificarSesion"],
  methods: {
    modificarLaSesion() {
      this.$emit("modificarSesion");
    }
  },
})