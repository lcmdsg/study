<template>
  <div class="manufacturing-container">
    <div class="each-manufacturing-first">
      <div class="manufacturing-title">海外制造商</div>
      <div class="manufacturing-desc">9.9元起</div>
    </div>
    <div class="each-manufacturing-second">
      <div class="manufacturing-title">CK制造商</div>
      <div class="manufacturing-desc">29.9元起</div>
    </div>
    <div class="each-manufacturing-third">
      <div class="manufacturing-title">新秀丽制造商</div>
      <div class="manufacturing-desc">159元起</div>
    </div>
    <div class="each-manufacturing-forth">
      <div class="manufacturing-title">Armani制造商</div>
      <div class="manufacturing-desc">199元起</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.manufacturing-container {
  width: 92%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.each-manufacturing-first {
    background: url(https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1);
    background-size: 190px;
  border-radius: 2px;
  margin-bottom: 2px;
  width: 49.7%;
  height: 140px;
}
.each-manufacturing-second {
  border-radius: 2px;
  margin-bottom: 2px;
  width: 49.7%;
  height: 140px;
  background: url(https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1);
    background-size: 190px;
}
.each-manufacturing-third {
  border-radius: 2px;
  margin-bottom: 2px;
  width: 49.7%;
  height: 140px;
  background: url(https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1);
    background-size: 190px;
}
.each-manufacturing-forth {
  border-radius: 2px;
  margin-bottom: 2px;
  width: 49.7%;
  height: 140px;
  background: url(https://yanxuan.nosdn.127.net/c9e14b08576b6a5e2bc3ef46e0e05d08.png?imageView&thumbnail=343y260&enlarge=1);
    background-size: 190px;
}
.manufacturing-title{
    margin-top: 15px;
    text-align: center;
    font-size: 15px;
}
.manufacturing-desc{
    text-align: center;
    font-size: 13px;
    color: #7F7F7F
}

</style>