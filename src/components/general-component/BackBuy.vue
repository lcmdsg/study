<template>
    <div class="backbuy">
        <div class="backbuy-top">
            <img src="https://yanxuan.nosdn.127.net/15538481219197847.jpeg" alt="">
            <img src="https://yanxuan.nosdn.127.net/15538481219467848.jpeg" alt="">
            <img src="https://yanxuan.nosdn.127.net/15538481223127849.jpeg" alt="">
        </div>
        <div class="backbuy-rankinglist">
            <div class="backbuy-rankinglist-title">严选回购榜</div>
            <img class="backbuy-rankinglist-titleimg" src="https://yanxuan.nosdn.127.net/15428766047261440.png" alt="">
            <div class="backbuy-rankinglist-list" v-for="(item,index) in rankinglist" :key="index">
                <div class="backbuy-rankinglist-list-top" :style="{background:item.color}">
                    <div class="backbuy-rankinglist-list-desctitle">
                        <div class="backbuy-rankinglist-list-num">{{item.number}}</div>
                        <div class="backbuy-rankinglist-list-tt">{{item.desctitle}}</div>
                    </div>
                    <div class="backbuy-rankinglist-list-desc">{{item.desc}}</div>
                </div>
                <div class="backbuy-rankinglist-list-bottom">
                    <img class="backbuy-rankinglist-list-bottom-img" :src="item.imgurl">
                    <div class="backbuy-rankinglist-list-bottom-right">
                        <div class="rankinglist-list-bottom-title">{{item.title}}</div>
                        <div class="rankinglist-list-bottom-desc">{{item.characteristic}}</div>
                        <div class="rankinglist-list-bottom-special">{{item.special}}</div>
                        <div class="rankinglist-list-bottom-backbuy">回购指数：<span>
                        <img src="../../assets/love.png" alt="">
                        <img src="../../assets/love.png" alt="">
                        <img src="../../assets/love.png" alt="">
                        <img src="../../assets/love.png" alt="">
                        <img src="../../assets/halflove.png" alt=""></span></div>
                        <div class="rankinglist-list-bottom-recommend">回购指数：<span>
                        <img src="../../assets/love.png" alt="">
                        <img src="../../assets/love.png" alt="">
                        <img src="../../assets/love.png" alt="">
                        <img src="../../assets/love.png" alt="">
                        <img src="../../assets/halflove.png" alt=""></span></div>
                        <div class="rankinglist-list-bottom-price"><span class="rankinglist-list-newprice">{{item.nowprice}}</span><span class="rankinglist-list-oldprice">{{item.oldprice}}</span></div>
                    </div>
                    <img @click="addGood(item)" class="rankinglist-list-cart" src="https://yanxuan.nosdn.127.net/15453626764930297.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from "../store/index.js"
import axios from "axios"
export default {
    store:store,
    data(){
        return{
            rankinglist:[],
        }
    },
    methods: {
        addGood(item){
            this.$store.commit("addGood", item);
        }
    },
    mounted(){
     let that=this
      axios.get("../../../data/backbuy.json").then(function(res) {
    //   console.log(res.data.list);
        that.rankinglist=res.data.list;
  })
    }
}
</script>
<style>
.backbuy{
    background: #F3F4F5
}
    .backbuy-top{
        width: 100%;
    }
    .backbuy-top img{
        vertical-align: top;
        width: 100%;
    }
    .backbuy-rankinglist{
        width: 92%;
        margin:30px auto 0
    }
    .backbuy-rankinglist-title{
        width: 100%;
        height: 22px;
        font-size: 20px;
        text-align: center;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsAAAAAoCAMAAADHebwbAAADhGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmM0Y2UwOWRhLWUzZWUtMjU0ZC04NzVjLWY3NDU0NWMzYzU1OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RjAxQjgxQURDRjExMUU4OTIxMkQ5MTJGMUQzQjM1MiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RjAxQjgxOURDRjExMUU4OTIxMkQ5MTJGMUQzQjM1MiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MGRlMWViNS00MjVjLTA5NDAtYmJhMy1kYzAzMWE0ZGRmYzgiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1ZjM1YjViZS1lZGZjLTExZTgtYTIyNi1lOWM4MmI1ZGZlYWEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5g2W1XAAAABlBMVEVHcEyOjo7bgak5AAAAAnRSTlMAgJsrThgAAAA/SURBVHja7dIxAQAACMOw4d80Evg4ILHQJgAAAAAAAAAAAAAAAAAAAJM6S9sXhQ1sYIUBAAAAAAAAAAAAgHUN6/kDaebjrz4AAAAASUVORK5CYII=")  50%;
        background-size: 100%
    }
    .backbuy-rankinglist-titleimg{
        width: 100%;
        padding: 8px 0 20px 0
    }
    .backbuy-rankinglist-list{
        width: 100%;;
        border-radius: 5px;
        margin-bottom: 10px
    }
    .backbuy-rankinglist-list-top{
        background: orange;
        padding: 0 13px 8px 8px;
    }
    .backbuy-rankinglist-list-desctitle{
        display: flex;
        font-size: 16px;
        color: white;

    }
    .backbuy-rankinglist-list-desc{
        font-size: 12px;
        color: white;
    }
    .backbuy-rankinglist-list-num{
        width: 20px;
        height: 23px;
        text-align: center;
        background: url("../../assets/ranklistaback.png")
    }
    .backbuy-rankinglist-list-tt{
        padding-top: 6px;
        padding-left: 6px;
    }
    .backbuy-rankinglist-list-desc{
        margin-top: 5px;
    }
    .backbuy-rankinglist-list-bottom{
        background: white;
        display: flex;
        padding: 8px;
        position: relative;
    }
    .backbuy-rankinglist-list-bottom-img{
        width: 138px;
        height: 138px;
    } .backbuy-rankinglist-list-bottom-right{
        margin-left: 20px;
    }
    .rankinglist-list-bottom-title{
        width: 200px;
        padding-top: 5px;
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .rankinglist-list-bottom-desc{
        font-size: 13px;
        padding-top: 2px;
        color: #949494;
    }
    .rankinglist-list-bottom-special{
        display: inline-block;
        color: #a94528;
        background-color: #f8bc59;
        font-size: 12px;
        padding: 0 5px;
    }
    .rankinglist-list-bottom-backbuy{
        margin-top: 8px;
        font-size: 12px;
        color: #c9a85f;
    }
    .rankinglist-list-bottom-recommend{
        font-size: 12px;
        color: #c9a85f;
    }
    .rankinglist-list-bottom-backbuy img{
        width: 13px;
        height: 11px;
    }
    .rankinglist-list-bottom-recommend img{
        width: 13px;
        height: 11px;
    }
    .rankinglist-list-newprice{
        font-size: 18px;
        color: #d7282d;
        padding-right: 10px;
    }
    .rankinglist-list-oldprice{
        font-size: 13px;
        color: #a5a5a5;
        text-decoration: line-through;
        
    }
    .rankinglist-list-newprice::before{
        content: "\A5"
    }
    .rankinglist-list-oldprice::before{
        content: "\A5"
    }
    .rankinglist-list-cart{
        width: 30px;
        height: 30px;
        position: absolute;
        right: 8px;
        bottom: 8px
    }
</style>