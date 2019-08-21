import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
function indexOfItem(item, array){
    for(let i=0; i<array.length; i++){
        if(item.title == array[i].title){
            return i;
        }
    }

    return -1;
}
const store = new Vuex.Store({
    state: {
        homeTabIndex:0,
        goodList:[],
        seen:true,
        detaillist:[],
        productnewlist:[],
        totalMoney:0,
        totalcount:0
    },
    getters:{
        totalMoney (state,getters) {
           let totalMoney=0;
            state.goodList.forEach((item) => {//遍历商品，如果选中就进行加个计算，然后累加
                if (item.checked){
                    state.totalMoney += item.nowprice*item.count;//累加的
                }return totalMoney
            })
        },
        totalcount (state,getters) {
           let totalcount=0;
            state.goodList.forEach((item) => {//遍历商品，如果选中就进行加个计算，然后累加
                if (item.checked){
                    state.totalcount += item.count;//累加的
                }return totalcount
            })
        },
    },
    mutations:{
        homeTabIndexChange(state,index){
            state.homeTabIndex=index
        },
      
        addGood(state, item){
            let index = indexOfItem(item, state.goodList);
            state.seen=false;
            if(index>-1){
                state.goodList[index].count++;
            }else{
                state.goodList.push(item);
            }
        },

        add(state, index){
            state.goodList[index].count++;
        },

        del(state,item, index){
            // if(item.checked){
                state.goodList.splice(index, 1);
                console.log(item.checked)
            // }
            
        },

        minus(state, index){
            state.goodList[index].count--;
            if(state.goodList[index].count<2){
                state.goodList[index].count=1
            }
        },
        aa(state,item){
            state.productnewlist=item
            // console.log(state.productnewlist)
        }
    }
});
export default store