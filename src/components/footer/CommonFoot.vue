<template>
    <div>
        <div class="tab-bar" >
            <div class="tab-bar-item" @click="menuClick(0)" :class="{'active':index==0}">
                <img :src="index==0?'icon-images/home-on.jpg':'icon-images/home-off.jpg'" id="tab-bar-item-img" >
                <div class="tab-bar-title" :class="{'active':index==0}">首页</div>
            </div>
            <div class="tab-bar-item" @click="menuClick(1)" :class="{'active':index==1}">
                <img  :src="index==1?'icon-images/category-on.jpg':'icon-images/category-off.jpg'" id="tab-bar-item-img">
                <div class="tab-bar-title" :class="{'active':index==1}">分类</div>
            </div>
             <div class="tab-bar-item" @click="menuClick(2)" :class="{'active':index==2}">
                <img  :src="index==2?'icon-images/general-things-on.jpg':'icon-images/general-things-off.jpg'" id="tab-bar-item-img">
                <div class="tab-bar-title" :class="{'active':index==2}">识物</div>
            </div>
            <div class="tab-bar-item" @click="menuClick(3)" :class="{'active':index==3}">
                <img :src="index==3?'icon-images/cart-on.jpg':'icon-images/cart-off.jpg'" id="tab-bar-item-img">
                <div class="tab-bar-title" :class="{'active':index==3}">购物车</div>
            </div>
            <div class="tab-bar-item" @click="menuClick(4)" :class="{'active':index==4}">
                <img :src="index==4?'icon-images/user-on.jpg':'icon-images/user-off.jpg'" id="tab-bar-item-img">
                <div class="tab-bar-title" :class="{'active':index==4}">我的</div>
            </div>
        </div>
    </div>
</template>
<script>
import store from "../../components/store/index.js"
export default {
    
   
    computed:{
        index(){
            return store.state.homeTabIndex;
         
            
        }
    },
    
    methods: {
        
        menuClick(index){
            store.commit("homeTabIndexChange",index)
            console.log(index)
            if(index==0){
                this.$router.push("/").catch(function(){
                    return ;
                });
            }

            if(index==1){
                this.$router.push("/category").catch(function(){
                    return ;
                });
            }
            if(index==2){
                this.$router.push("/general").catch(function(){
                    return ;
                });
            }

            if(index==3){
                this.$router.push("/cart").catch(function(){
                    return ;
                });
            }
            if(index==4){
                this.$router.push("/user").catch(function(){
                    return ;
                });
            }
        }
    },
}
</script>
<style>
    .tab-bar {
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 54px;
    background: white;
    font-size: 15px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.tab-bar-item {

    width: 20%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#tab-bar-item-img{
    width: 21px;
    height: 21px;
    
}
#tab-bar-item-img img{
    width: 100%;
}
.active{
    color: #b4282d
}
</style>