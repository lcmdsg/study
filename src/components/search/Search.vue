<template>
  <div>
    <div class="classifytop">
      <div class="backto" @click="backtoindex">
        <img src="../../assets/back.png" alt="">
      </div>
      <div class="inputs">
        <input type="text" placeholder="请输入" />
      </div>
      <div class="search-my">
        <img src="../../assets/search.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:["seen"],
     methods: {
        backtoindex(){
            this.$router.go(-1);
            this.$emit('backtoindex');
        }
    },
}
</script>
<style>
    .classifytop{
    height: 50px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    
    background: rgb(237, 237, 237);
}
.backto{
    width: 25px;
   
}
.backto img{
    width: 100%;
   
}
.inputs{
    margin-left: 8px;
    margin-right: 8px
}
.inputs input{
    width: 276px;
    height: 28px;
}
.search-my{
    width: 40px;
}
.search-my img{
    width: 100%;
}
</style>