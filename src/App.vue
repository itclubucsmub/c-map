<template>
  <div>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>C-map  </span>
        <span class="font-weight-light">your pocket guide</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {

    };
  }
};
</script>
