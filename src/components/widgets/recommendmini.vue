<template>
    <div class="recommendmini">
        <div class="goldenfont" v-if="(item.goldfont)">{{item.goldfont}}</div>
        <div class="recommendmini-img">
            <img :src="item.imgurl" alt="">
        </div>
        <div class="recommendmini-title">
            {{item.title}}<span class="recommendmini-price">{{item.price}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:["item"]
}
</script>
<style>
    .recommendmini{
        width: 28%;
        /* border: 1px solid red; */
        position: relative;
        display: inline-block;
        margin-left: 12px;
    }
    .goldenfont{
        width: 18px;
        height: 66px;
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
        font-size: 13px;
    }
    .recommendmini-price{
        color: #b4282d;
    }
    .recommendmini-price::before{
        content:"\A5"
    }
</style>