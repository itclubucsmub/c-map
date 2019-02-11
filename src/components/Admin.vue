<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 ml-2>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1" editable>Add Laptop Information
            <!-- <small>Summarize if needed</small> -->
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-layout row wrap>
              <v-flex offset-md3 xs12 sm6 md3>
                <v-text-field label="Brand" v-model="brand" single-line solo></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md3 ml-3>
                <v-text-field label="Model" v-model="model" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2" editable>CPU</v-stepper-step>

          <v-stepper-content step="2">
            <v-layout row wrap>
              <v-flex xs12 offset-xs2 sm6 md2>
                <v-text-field label="Core" v-model="core" single-line solo></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md2 ml-3>
                <v-text-field label="Gen" v-model="gen" single-line solo></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md2 ml-3>
                <v-text-field label="Clock (min)" v-model="clcmin" single-line solo></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md2 ml-3>
                <v-text-field label="Clock (max)" v-model="clcmax" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3" editable>Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
            <v-btn flat @click="e6 = 1">Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step step="4" editable>View setup instructions</v-stepper-step>
          <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click="upload">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper>
        {{brand}}{{model}}{{core}}{{gen}}{{clcmin}}{{clcmax}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firestore from '../firebase/firestore'
export default {
  data() {
    return {
      e6: 1,
      brand: "",
      model: "",
      core: "",
      gen: "",
      clcmin: "",
      clcmax: ""
    };
  },
  methods: {
    upload: function() {
      firestore
        .collection("test")
        .doc()
        .set({
          brand: this.brand,
          model: this.model,
          core: this.core,
          gen: this.gen,
          clcmin: this.clcmin,
          clcmax: this.clcmax
        });
    }
  }
};
</script>

<style>
</style>
