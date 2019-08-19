<template>
  <div class="newest-item">
    <div class="newest-item-img">
      <img
        :src="detail.imgSrc"
        alt
      />
    </div>
    <div class="newest-item-p">
      <p>{{detail.imgDesc}}</p>
    </div>
    <div class="newest-item-footer">
      <div class="newest-item-head">
        <img
          :src="detail.userhead"
          alt
        />
      </div>
      <div class="newest-item-name">
        <span>{{detail.username}}</span>
      </div>
      <p class="newest-item-number">{{detail.number}}</p>
      <div class="newest-item-zan">
        <img src="../../assets/dianzan.png" alt />
      </div>
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