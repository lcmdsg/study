<template>
  <div class="summer-commodity-contents-item">
    <img v-lazy="detail.imgSrc" alt />
    <div class="summer-commodity-desc">{{detail.imgDesc}}</div>
    <div class="summer-commodity-price">
      <span class="summer-commodity-price-now">{{detail.price}}</span>
      <span v-if="detail.originprice" class="summer-commodity-price-origin">{{detail.originprice}}</span>
    </div>
    <span class="summer-plummet" v-if="detail.plummet">
      <p>直降</p>
      <p>{{detail.plummet}}</p>
    </span>
  </div>
</template>
<script>
export default {
  props: ["detail", "index"]
};
</script>
<style>
</style>