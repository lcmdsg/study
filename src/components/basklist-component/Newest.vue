<template>
  <div>
    <div class="newest-container">
      <bask-item v-for="(item, index) in baskitem.list" :key="index" :detail="item" :index="index"></bask-item>
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
.newest-container {
  width: 100%;
  column-count: 2;
  padding-left: 10px;
}
.newest-item {
  width: 190px;
  margin-bottom: 10px;
  break-inside: avoid;
  box-shadow: 0 0 1px #ddd;
  border: 0 solid black;
  border-radius: 5px;
}
.newest-item-img img {
  width: 190px;
  border-radius: 5px;
}
.newest-item-p {
  padding: 5px 6px 0;
  color: #333;
  font-size: 13px;
  line-height: 22px;
  height: 47px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.newest-item-footer {
  display: flex;
  flex-direction: row;
  height: 52px;
  padding: 10px;
}
.newest-item-head img {
  width: 26px;
  height: 26px;
}
.newest-item-name {
  width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #7f7f7f;
  height: 30px;
  line-height: 30px;
  margin-left: 5px;
}
.newest-item-number {
  font-size: 14px;
  color: #7f7f7f;
  height: 30px;
  line-height: 30px;
  margin-left: 5px;
}
.newest-item-zan {
  padding-top: 4px;
}
.newest-item-zan img {
  width: 15px;
  height: 15px;
}
</style>