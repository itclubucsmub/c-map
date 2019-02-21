<template>
  <v-container>
    <v-layout row wrap>
      <v-btn outline round color="indigo" @click="getLaptopInfo('all')">All</v-btn>
      <v-btn outline round color="indigo" @click="getLaptopInfo('Gaming')">Gaming</v-btn>
      <v-btn outline round color="indigo" @click="getLaptopInfo('Editor')">Editing</v-btn>
      <v-btn outline round color="indigo" @click="getLaptopInfo('Design')">Designer</v-btn>
      <v-btn outline round color="indigo" @click="getLaptopInfo('Developer')">Programming</v-btn>
      <v-btn outline round color="indigo" @click="getLaptopInfo('General')">General</v-btn>
      <v-btn outline round color="indigo" @click="getLaptopInfo('Office')">Office</v-btn>
    </v-layout>
    <v-layout row wrap mt-4>
      <v-flex xs6 v-for="lp in laptop" :key="lp.model" mb-4>
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
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">
                <span>Model:</span>
                <span class="red--text">{{lp.model}}</span>
              </div>
              <v-card>
                <v-card-text>
                  <v-card-title>
                    <div>
                      <!-- <span>Model:</span>
                        <span class="red--text">{{lp.model}}</span>
                      <br>-->
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
                      <span>Graphic type:</span>
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
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firestore from "../firebase/firestore";

export default {
  data() {
    return {
      laptop: [],
      query: {},
      cate: ""
    };
  },
  mounted() {
    firestore
      .collection("laptop")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.laptop.push(doc.data());
        });
      });
  },
  methods: {
    getLaptopInfo: function(parm) {
      this.laptop = [];
      var query = firestore.collection("laptop");
      if (parm != "all") {
        query = query.where("category", "==", parm);
        query.get().then(snapshot => {
          snapshot.forEach(doc => {
            this.laptop.push(doc.data());
          });
        });
      } else {
        query.get().then(snapshot => {
          snapshot.forEach(doc => {
            this.laptop.push(doc.data());
          });
        });
      }
    }
  }
};
</script>
<style>
.brandbg {
  background: #fff;
  padding: 2px 4px 2px 4px;
}
</style>
