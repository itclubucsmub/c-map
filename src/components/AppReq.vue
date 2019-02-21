<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 ml-2>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1" editable>Add Software Information</v-stepper-step>

          <v-stepper-content step="1">
            <v-layout row wrap>
              <v-flex offset-md3 xs12 sm6 md3>
                <v-text-field label="App Name" v-model="app" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2" editable>Add Software Information</v-stepper-step>

          <v-stepper-content step="2">
            <v-layout row wrap>
              <v-flex offset-md3 xs12 sm6 md3>
                <v-text-field label="OS" v-model="os" single-line solo></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md3 ml-3>
                <v-text-field label="Bit" v-model="bit" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3" editable>Processor</v-stepper-step>

          <v-stepper-content step="3">
            <v-layout row wrap>
              <v-flex xs12 offset-xs2 sm6 md2>
                <v-text-field label="Core" v-model="core" single-line solo></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md2 ml-3>
                <v-text-field label="Model" v-model="cmodel" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 4" step="4" editable>GPU</v-stepper-step>

          <v-stepper-content step="4">
            <v-layout row wrap>
              <v-flex xs12 offset-xs2 sm6 md2>
                <v-text-field label="Type" v-model="gtype" single-line solo></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md2 ml-3>
                <v-text-field label="Memory" v-model="gmemory" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 5" step="5" editable>img</v-stepper-step>

          <v-stepper-content step="5">
            <v-layout row wrap>
              <v-flex xs12 offset-xs2 sm6 md2>
                <v-text-field label="image" v-model="img" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 6">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step step="6" editable>RAM</v-stepper-step>
          <v-stepper-content step="6">
            <v-layout row wrap>
              <v-flex xs12 offset-xs2 sm6 md2>
                <v-text-field label="Capacity" v-model="ram" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="upload">Continue</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firestore from "../firebase/firestore";
export default {
  data() {
    return {
      e6: 1,
      app: "",
      os: "",
      bit: "",
      core: "",
      cmodel: "",
      gtype: "",
      gmemory: "",
      ram: "",
      img: ""
    };
  },
  methods: {
    upload: function() {
      firestore
        .collection("appreq")
        .doc(this.app)
        .set({
          app: this.app,
          os: this.os,
          bit: this.bit,
          core: this.core,
          cmodel: this.cmodel,
          gtype: this.gtype,
          gmemory: this.gmemory,
          ram: this.ram,
          img: this.img
        });
    }
  }
};
</script>

<style>
</style>
