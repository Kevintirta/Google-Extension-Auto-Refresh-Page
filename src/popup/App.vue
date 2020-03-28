<template>
  <div class="extension">
    <h2>Automatic Web Refresher</h2>

    <input v-model="keyword" placeholder="Enter keyword">
    <!-- <vue-toggle-btn></vue-toggle-btn> -->
    <!-- <button v-on:click="buttonSearch">Search</button> -->
    <Example></Example>
    <p>Visit my Github <a target="_blank" href="https://github.com/Kevintirta?tab=repositories" style="text-decoration: none;">KevinTirta</a></p>
  </div>
</template>

<script>
import Example from '../components/Example.vue'

const browser = require("webextension-polyfill");
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    buttonSearch() {
      	window.open("https://www.mynotepaper.com/?s=" + this.keyword);
    }
  },
  components:{
    Example
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 16px;
}
.extension {
  width: 300px;
  text-align: center;
}
</style>