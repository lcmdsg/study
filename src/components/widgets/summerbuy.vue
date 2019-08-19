
<template>
  <div class="summer-buy-wrap">
      <div class="summer-buy-wrap-item">
        <div class="summer-buy-item-img">
          <img
            :src="detail.imgSrc"
            alt
          />
        </div>
        <div class="summer-buy-item-desc">{{detail.imgDesc}}</div>
        <div class="summer-buy-item-discount">
          <span class="summer-buy-item-span1" v-if="detail.discount">{{detail.discount}}</span>
          <span class="summer-buy-item-span2" v-if="detail.discount2">{{detail.discount2}}</span>
        </div>
        <div class="summer-buy-item-price">
          <span class="summer-buy-item-price-now" v-if="detail.price">{{detail.price}}</span>
          <span class="summer-buy-item-price-origin" v-if="detail.originprice">{{detail.originprice}}</span>
        </div>
        <div class="summer-buy-item-buy">{{detail.quick}}</div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["detail", "index"]
};
</script>

<style>
</style>