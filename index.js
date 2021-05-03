const MiAplicacion = Vue.createApp({

  data: function () {
    return {
      usuarios: [],
      cargando: true
    }
  },

  created: function () {
    this.getUsers();
  },

  methods: {
    getUsers: function () {
      fetch("https://reqres.in/api/users").then((peticion) => {
        return peticion.json();
      }).then((rpta) => {
        console.log(rpta);
        this.usuarios = rpta.data;
        this.cargando = false;
      })
    }
  },

});


MiAplicacion.mount("#root");