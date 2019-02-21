<template>
  <v-container>
    <v-layout row wrap>
      <v-flex mt-5>
        <center>
          <v-autocomplete v-model="model" :items="states" outline label="Search"></v-autocomplete>
          <v-btn color="primary" @click="search" fab id="btn">
            <v-icon dark>search</v-icon>
          </v-btn>
        </center>
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-4>
      <v-flex xs6 v-for="lp in result" :key="lp.model" mt-5 pt-5>
        <v-card>
          <v-card-media class="red--text" v-bind:src="lp.img" height="200px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline brandbg">{{lp.brand}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span>Model:</span>
              <span class="red--text">{{lp.model}}</span>
              <br>
              <span>Core:</span>
              <span class="red--text">{{lp.core}}</span>
              <br>
              <span>Capacity:</span>
              <span class="red--text">{{lp.capacity}}</span>
              <br>
              <span>Category:</span>
              <span class="red--text">{{lp.category}}</span>
              <br>
              <span>Clcmax:</span>
              <span class="red--text">{{lp.clcmax}}</span>
              <br>
              <span>Clcmin:</span>
              <span class="red--text">{{lp.clcmin}}</span>
              <br>
              <span>Display Type:</span>
              <span class="red--text">{{lp.dtype}}</span>
              <br>
              <span>Gen:</span>
              <span class="red--text">{{lp.gen}}</span>
              <br>
              <span>Gmemory:</span>
              <span class="red--text">{{lp.gmemory}}</span>
              <br>
              <span>Display gype:</span>
              <span class="red--text">{{lp.gype}}</span>
              <br>
              <span>OS:</span>
              <span class="red--text">{{lp.os}}</span>
              <br>
              <span>Ram:</span>
              <span class="red--text">{{lp.ram}}</span>
              <br>
              <span>Size:</span>
              <span class="red--text">{{lp.size}}</span>
              <br>
              <span>stype:</span>
              <span class="red--text">{{lp.stype}}</span>
              <br>
              <span>Price:</span>
              <span class="red--text">{{lp.price}}</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import firebase from "firebase/app";
import firestore from "../firebase/firestore";
import { scrollTo } from "scroll-js";
export default {
  data() {
    return {
      states: [],
      model: "",
      interVal: {},
      query: {},
      result: [],
      offsetTop: 0
    };
  },
  mounted() {
    firestore
      .collection("appreq")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.states.push(doc.id);
        });
      });
  },
  methods: {
    search: function() {
      firestore
        .collection("appreq")
        .doc(this.model)
        .get()
        .then(doc => {
          this.interVal = doc.data();
          this.getLaptopInfo();
        });
    },

    getLaptopInfo: function() {
      this.result = [];
      var query = firebase.firestore().collection("laptop");
      query = query.where("ram", ">=", this.interVal.ram);
      query.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.result.push(doc.data());
        });
      });
    },
    scroll: function() {
      scrollTo(document.body, { top: 1500 });
    }
  }
};
</script>

<style>
.brandbg {
  background-color: none;
  padding: 2px 4px 2px 4px;
}
</style>
