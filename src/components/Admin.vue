<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 ml-2>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1" editable>Add Laptop Information</v-stepper-step>

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

          <v-stepper-step :complete="e6 > 3" step="3" editable>Storage</v-stepper-step>

          <v-stepper-content step="3">
            <v-layout row wrap>
              <v-flex offset-md3 xs12 sm6 md3>
                <v-text-field label="Storage" v-model="stype" single-line solo></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md3 ml-3>
                <v-text-field label="Capacity" v-model="capacity" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 4" step="4" editable>Ram</v-stepper-step>

          <v-stepper-content step="4">
            <v-layout row wrap>
              <v-flex offset-md3 xs12 sm6 md3>
                <v-text-field label="Ram" v-model="ram" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
          </v-stepper-content>
          <v-stepper-step :complete="e6 > 5" step="5" editable>Graphic</v-stepper-step>

          <v-stepper-content step="5">
            <v-layout row wrap>
              <v-flex md3 offset-md1>
                <v-text-field label="Type" v-model="gtype" single-line solo></v-text-field>
              </v-flex>
              <v-flex md3 offset-md1>
                <v-text-field label="GPUMemorySize" v-model="gmemory" single-line solo></v-text-field>
              </v-flex>
              <v-flex md3 offset-md1>
                <v-text-field label="GPU clockspeed" v-model="gmemoryclk" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 6">Continue</v-btn>
          </v-stepper-content>
          <v-stepper-step :complete="e6 > 6" step="6" editable>Display</v-stepper-step>

          <v-stepper-content step="6">
            <v-layout row wrap>
              <v-flex offset-md3 xs12 sm6 md3>
                <v-text-field label="Display" v-model="dtype" single-line solo></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md3 ml-3>
                <v-text-field label="Size" v-model="size" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 7">Continue</v-btn>
          </v-stepper-content>
          <v-stepper-step :complete="e6 > 7" step="7" editable>Price</v-stepper-step>

          <v-stepper-content step="7">
            <v-layout row wrap>
              <v-flex offset-md3 xs12 sm6 md3>
                <v-text-field label="Price" v-model="price" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 8">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 8" step="8" editable>OS</v-stepper-step>

          <v-stepper-content step="8">
            <v-layout row wrap>
              <v-flex offset-md3 xs12 sm6 md3>
                <v-text-field label="OS" v-model="os" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 9">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 9" step="9" editable>image</v-stepper-step>

          <v-stepper-content step="9">
            <v-layout row wrap>
              <v-flex offset-md3 xs12 sm6 md3>
                <v-text-field label="image" v-model="img" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6 = 10">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step step="10" editable>Category</v-stepper-step>
          <v-stepper-content step="10">
            <v-layout row wrap>
              <v-flex offset-md3 xs12 sm6 md3>
                <v-text-field label="Category" v-model="category" single-line solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="upload">Continue</v-btn>
          </v-stepper-content>
        </v-stepper>
        {{brand}}{{model}}{{core}}{{gen}}{{clcmin}}{{clcmax}}{{img}}
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
      brand: "",
      model: "",
      core: "",
      gen: "",
      clcmin: "",
      clcmax: "",
      stype: "",
      capacity: "",
      ram: "",
      gtype: "",
      gmemory: "",
      gmemoryclk: "",
      dtype: "",
      size: "",
      price: "",
      category: "",
      os: "",
      img: ""
    };
  },
  methods: {
    upload: function() {
      firestore
        .collection("laptop")
        .doc()
        .set({
          brand: this.brand,
          model: this.model,
          core: this.core,
          gen: this.gen,
          clcmin: this.clcmin,
          clcmax: this.clcmax,
          os: this.os,
          stype: this.stype,
          capacity: this.capacity,
          ram: this.ram,
          gype: this.gtype,
          gmemory: this.gmemory,
          gmemoryclk: this.gmemoryclk,
          dtype: this.dtype,
          size: this.size,
          price: this.price,
          category: this.category,
          img: this.img
        });
    }
  }
};
</script>

<style>
</style>
