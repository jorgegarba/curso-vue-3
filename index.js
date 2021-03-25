let curso = {
  nombre: "Curso avanzado de Vue3",
  duracion: "50",
  disponible: true,
  precio: 40,
  descuento: 20,
  imagen: "vue.png",
  descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
}

let cursos = [
  {
    id: 30,
    nombre: "Curso avanzado de Vue3",
    duracion: 50,
    disponible: true,
    precio: 40,
    descuento: 20,
    imagen: "vue.png",
    descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
  },
  {
    id: 13,
    nombre: "Curso básico de reactjs",
    duracion: 20,
    disponible: false,
    precio: 40,
    descuento: 0,
    imagen: "react.png",
    descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
  },
  {
    id: 450,
    nombre: "Curso definitivo de Webpack",
    duracion: 30,
    disponible: true,
    precio: 40,
    descuento: 10,
    imagen: "webpack.png",
    descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
  },
  {
    id: 12,
    nombre: "Crea tu servidor web con NodeJS",
    duracion: 15,
    disponible: true,
    precio: 35,
    descuento: 5,
    imagen: "node.png",
    descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
  },
]


const App = {
  data: function () {
    return {
      cursos: [
        {
          nombre: "Curso avanzado de Vue3",
          duracion: 50,
          disponible: true,
          precio: 40,
          descuento: 20,
          imagen: "vue.png",
          descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
        },
        {
          nombre: "Curso básico de reactjs",
          duracion: 20,
          disponible: false,
          precio: 40,
          descuento: 0,
          imagen: "react.png",
          descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
        },
        {
          nombre: "Curso definitivo de Webpack",
          duracion: 30,
          disponible: true,
          precio: 40,
          descuento: 10,
          imagen: "webpack.png",
          descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
        },
        {
          nombre: "Crea tu servidor web con NodeJS",
          duracion: 15,
          disponible: true,
          precio: 35,
          descuento: 5,
          imagen: "node.png",
          descripcion: " magnam illo? Eos explicabo consequuntur nesciunt ex nostrum ipsam, porro nulla, consectetur iste distinctio, commodi odit! Eveniet?"
        },
      ]
    }
  }
}

Vue.createApp(App).mount("#root");
