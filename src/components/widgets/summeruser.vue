<template>
  <div>
    <div class="summer-evaluate">
      <div class="summer-evalute-goods">
        <div class="summer-evalute-left">
          <img
            :src="detail.imgSrc"
            alt
          />
        </div>
        <div class="summer-evalute-right">
          <div class="summer-evalute-info">{{detail.imgDesc}}</div>
          <div class="summer-evalute-tag">
            <span v-if="detail.special">{{detail.special}}</span>
            <span v-if="detail.special2">{{detail.special2}}</span>
          </div>
          <div class="summer-evalute-price">
            <div class="summer-evalute-pricenum">{{detail.price}}</div>
            <div class="summer-evalute-originprice" v-if="detail.originprice">{{detail.originprice}}</div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAkFBMVEUAAACrCSOrCSOrCSOrCSOrCSOrCSOrCSOrCSOrCSOrCSOrCSOrCSOrCSOrCSOrCSOrCSOrCSP///+vFC3x1tu6NUvakJy0Ijnkrbb++vvNanr14eS/QVa4LEP78vTuzdLReIfrwsnYi5fWhZLnusHiqLLfoKvdm6XKZHTHWGq2Jz735unmtbzPcIDBSFv36euZob3SAAAAEXRSTlMA4J7y7cRuWKWKZD4kvzUtCfx0B24AAAHeSURBVEjHrZZpc4IwEIabINjL2n0BISB4W7XX//93nVqHHKwNhT4fGZ6ZTfbI3vwvT5EMRUA0EqGMnrpaD3JEFiP50EG7F8Qg7vtofvUxpF8IH69544B+JRjz3h15ueO8W+rArcfzmP44/dGOqTNjKw9BdzEwszKhPzBhAgWAtHuwz02dFUWOpVcUzxcxIk2FHXmJLqIgTYxPvygu/UcmKyQ8C+MMP/0pLXGDq1CDPIt2vx+xiVkSQxx9e1OyqLAlFlWSZtrcqaZWrHfCyrlXSTZbvgQ+8EL2Id1xscSBEwu8kyZssqiZY8aJa3w4mXQbI8aCE3OcyL5WckkQM2KirK+c+IJ524tVQiZMqHTgGqRCTk6ogv+ndWVrt8zb07t+TVvMUJCTDslcIEN9IqcAopa4wdusRdpq5WlLPOKdPEx1W3lLwLlU9pBKVZmFWxFSjw53CCg0KAVsdU3o0eFmcoYyVyh3+Q9vQLkCTFPo8WjlP4kprZtjpsiJjk4b64GsOZxTvUfVBPCdiRKxMZDZt2qO/blFsqaxl0RZXbLv1cQ0F9gXKz0oshrrojQqbnLtmcsWAHZGCK8A1sYz1/dh7fuU910e+q8rwxek4SuZfwkcvHYOX3T9q/XwZX44X+9NnnYZtApoAAAAAElFTkSuQmCC"
              alt
            />
          </div>
          <div class="summer-evalute-img">
            <img
              :src="detail.smallimg"
              alt
            />
          </div>
        </div>
      </div>
      <div class="summer-evalute-user">
        <div class="summer-evalute-head">
          <img
            :src="detail.userhead"
            alt
          />
        </div>
        <div class="summer-evalute-user-info">
          <div class="summer-evalute-user-name">
            <span>{{detail.username}}</span>
            <span>{{detail.time}}</span>
          </div>
          <div
            class="summer-evalute-content"
          >{{detail.content}}</div>
        </div>
      </div>
    </div>
    <div class="summer-evalute-division"></div>
  </div>
</template>
<script>
export default {
  props: ["detail", "index"]
};
</script>
<style>
    
</style>