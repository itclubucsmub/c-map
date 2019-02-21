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
            <v-list-tile>
              <v-list-tile-content>
                <v-btn small router-link to="/admin" flat color="primary">Add Laptop Info</v-btn>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn small router-link to="/appreq" flat color="primary">Add App Info</v-btn>
              </v-list-tile-content>
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
    return {};
  }
};
</script>
