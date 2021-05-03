

const App = {
  data: function () {
    console.log("data");
    return {
      cursos: [
        {
          id: 14,
          nombre: "Curso avanzado de Vue3",
          duracion: 50,
          disponible: true,
          precio: 40,
          descuento: 20,
          imagen: "vue.png",
          descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
        },
        {
          id: 4,
          nombre: "Curso básico de reactjs",
          duracion: 20,
          disponible: false,
          precio: 38,
          descuento: 0,
          imagen: "react.png",
          descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
        },
        {
          id: 5,
          nombre: "Curso definitivo de Webpack",
          duracion: 30,
          disponible: true,
          precio: 50,
          descuento: 10,
          imagen: "webpack.png",
          descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
        },
        {
          id: 154,
          nombre: "Crea tu servidor web con NodeJS",
          duracion: 15,
          disponible: true,
          precio: 35,
          descuento: 5,
          imagen: "node.png",
          descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
        },
      ],
      auth: true,
      cursoSeleccionado: null,
      carrito: []
    }
  },
  methods: {
    cambiarSesion: function () {
      this.auth = !this.auth
    },
    seleccionarCurso: function (curso) {
      this.cursoSeleccionado = { ...curso };
    },
    agregarCarrito: function (objCurso) {

      if (!this.carrito.find(curso => objCurso.id === curso.id)) {
        this.carrito.push(objCurso);

      }
    },
    // no usar el siguiente método ya que es muy costoso!
    totalMethod() {
      let total = this.carrito.reduce((prevValue, objCurso) => {
        return prevValue + objCurso.precio
      }, 0);
      return total
    }
  },
  computed: {
    // el valor de la variable computada "total" es más eficiente que el metodo "totalMethod"
    total() {
      let total = this.carrito.reduce((prevValue, objCurso) => {
        return prevValue + objCurso.precio
      }, 0);

      return total
    }
  },
}

const MiAplicacion = Vue.createApp(App);

