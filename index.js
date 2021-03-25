let curso = {
  nombre: "Curso avanzado de Vue3",
  duracion: "50",
  disponible: true,
  precio: 40,
  descuento: 20,
  imagen: "vue.png",
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque consectetur molestias voluptatum, magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
}


const App = {
  data() {
    return {
      curso: {
        nombre: "Curso avanzado de Vue3",
        duracion: "50",
        disponible: true,
        precio: 35,
        descuento: 15,
        imagen: "vue.png",
        descripcion: " voluptatum, magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
      },
      auth: false
    }
  },
}

Vue.createApp(App).mount("#root");