<template>
  <div>
    <v-app theme="dark">
    <v-app-bar class="bg-red" :elevation="2">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title>Meu App</v-app-bar-title>
    </v-app-bar>
   

    <v-main>
    <v-container>
      <h1>Dashboard</h1>
    <v-row>
      <v-col cols="6">
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
      cover
    >
      <v-card-title>Top 10 Lugares Do Mundo</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Numero 10
    </v-card-subtitle>

    <v-card-text>
      <div><h3>Antardida</h3></div><br>

      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestias optio aut. Animi amet corrupti tempore molestiae omnis rem! Eum, tempore culpa consequuntur obcaecati distinctio eveniet ab sed neque rem.</div>
    </v-card-text>

    <v-card-actions>
    <v-btn variant="outlined" color="orange">
        Compartilhar
    </v-btn>

    <v-btn variant="outlined" color="orange">
        Saiba Mais
    </v-btn>
    </v-card-actions>
    </v-card>
    </v-col>

    <v-col cols="6">
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
      cover
    >
      <v-card-title>Top 10 Lugares Do Mundo</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Numero 10
    </v-card-subtitle>

    <v-card-text>
      <div><h3>Antardida</h3></div><br>

      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestias optio aut. Animi amet corrupti tempore molestiae omnis rem! Eum, tempore culpa consequuntur obcaecati distinctio eveniet ab sed neque rem.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange">
        Compartilhar
      </v-btn>

      <v-btn color="orange">
        Saiba Mais
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-col>

    </v-row>
    </v-container>
    </v-main>

    <div>
</div>
</v-app>
</div>
</template>
