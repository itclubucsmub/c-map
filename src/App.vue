<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>C-map</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        <v-btn router-link to="/" flat>Home</v-btn>
        <v-btn router-link to="/sugtest" flat>Magic Bar</v-btn>

        <v-menu bottom origin="center center" transition="scale-transition">
          <v-btn slot="activator" color="primary" dark>Contributor</v-btn>

          <v-list>
            <v-list-tile v-for="(item, i) in items" :key="i" @click ="items">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

      </span>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        { title: "Add LaptopInfo"},
        { title: "Add App" }
      ]
    };
  }
};
</script>
