<template>

  <BaseAlert 
  v-if="showAlert"
  variant="success" 
  @close="onClose"></BaseAlert>

  <TheHeader>
    Bom Dia</TheHeader>

  <div v-show="showName">
  nome: {{ user.name }} <br>
  sobrenome: {{ user.lastName }}
</div>
{{ fullName }}

<div v-if="userClass === 'Admin'">
  Usuario Admin
</div>

<div v-else>
  Usuario Normal
</div>

<div v-for="user in users" :key="user.name">
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

  <button v-on:click="onClick()">Click</button> <br><br>
  <input @keyup="onKeyUp" type="text"> 

</div>





</template>

<script>
import TheHeader from './components/TheHeader';
import BaseAlert from './components/BaseAlert';

export default {
  name: 'App',
  components: {
    TheHeader,
    BaseAlert
  },
  data(){
    return{
      showAlert: true,
      showHeader: true,
      user:{name: "luis",
            lastName: "felipe"},
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
  computed:{
    fullName(){return `${this.user.name} ${this.user.lastName}`}
  },
  methods:{
    onClick(){console.log('click');},
    onKeyUp($evt){console.log('onKeyUp',$evt);},
    onClose(){
      this.showAlert = false
      console.log('fecho');
    }
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