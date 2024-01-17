<template>
  <TheHeader v-if= "showHeader"></TheHeader>
<div v-show="showName">
  nome: {{ name }} <br>
  sobrenome: {{ lastName }}
</div>

<div v-if="userClass === 'Admin'">
  Usuario Admin
</div>
<div v-else>
  Usuario Normal
</div>

<div v-for="user in users" v-bind:key="users.name">
  Nome : {{ user.name }} <br>
  Idade: {{ user.age }}
</div><br>

<div>
  Nome <input v-model="name" type="text"> <br><br>
  Sports <select v-model="sports">
          <option value="futebol">Futebol</option>
          <option value="basquete">Basquete</option>
          <option value="volei">Volei</option>
        </select><br><br>
  Possui CNH? <input v-model="cnh" type="radio" value="Sim">Sim <input v-model="cnh" type="radio" value="Não">Não <br><br>
  Contrato<br> <input v-model="contrato" type="checkbox" > Aceita os termos <br><br>

  <button v-on:click="onClick()">Enviar</button>
  

</div>





</template>

<script>
import TheHeader from './components/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data(){
    return{
      showHeader: true,
      name: "luis",
      lastName: "felipe",
      showName: true,
      userClass: "Admin",
      users: [
      {
              "name":"Luis",
              "age":19,
              "cars":["Ford", "BMW", "Fiat"]
      },   
      {
              "name":"Gabriel",
              "age":25,
              "cars":["Ford", "BMW", "Fiat"]
      }],
      sports: '',
      cnh:'',
      contrato: false
    }
  },
  methods:{
    onClick(){console.log('click');}

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
