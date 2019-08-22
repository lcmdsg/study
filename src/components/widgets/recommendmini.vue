<template>

    <div class="recommendmini" @click="aa(index)">
        
            <div class="goldenfont" v-if="(item.goldfont)">{{item.goldfont}}</div>
            <div class="recommendmini-img">
                <img :src="item.imgurl" alt="">
            </div>
            <div class="recommendmini-title">
                {{item.title}}<span class="recommendmini-price">{{item.nowprice}}</span>
            </div>
            <span class="recommendmini-special" v-if="(item.special)">
                {{item.special}}
            </span>
       
    </div>

</template>
<script>
import store from "../store/index.js"
export default {
    store:store,
    props:["item","index","newproductList"],
    methods:{
     aa(index){
         this.$store.commit("aa",this.newproductList[index]);
         this.$router.push("recommenddetail");
        //  console.log(this.index)
        //  console.log(this.newproductList[index]);
     } 
    }
}
</script>
<style>
    .recommendmini{
        width: 29%;
        /* border: 1px solid red; */
        position: relative;
        display: inline-block;
        margin-left: 11px;
        margin-bottom: 10px;
    }
    .goldenfont{
        width: 18px;
        border: 1px solid #b4a078;
        position: absolute;
        left: 6px;
        top: 8px;
        color: #b4a078;
        text-align: center;
        font-size: 12px;
    }
    .recommendmini-img{
        background-color: #f5f5f5;
        width: 100%;
    }
    .recommendmini-img img{
        width: 100%;
    }
    .recommendmini-title{
        padding: 6px;
        padding-bottom: 2px;
        font-size: 13px;
    }
    .recommendmini-price{
        color: #b4282d;
    }
    .recommendmini-price::before{
        content:"\A5"
    }
    .recommendmini-special{
        padding:1px 4px;
        margin-left: 4px;
        font-size: 11px;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: 8px;
    }
</style>