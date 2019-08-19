<template>
  <div>
    <div class="newest-container">
      <bask-item v-for="(item, index) in baskitem.list2" :key="index" :detail="item" :index="index"></bask-item>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import baskitem from "../widgets/baskitem.vue";
export default {
  data() {
    return {
      baskitem: {}
    };
  },
  components: {
    "bask-item": baskitem
  },
  created() {
    let that = this;
    axios.get("../../../data/baskitem.json").then(function(res) {
      that.baskitem = res.data.result;
    });
  }
};
</script>
<style>
</style>