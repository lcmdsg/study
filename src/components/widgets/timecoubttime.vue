<template>
  <div class="time-countdown">
   {{hr}}:{{min}}:{{sec}}
  </div>
</template>
           
<script>
export default {
  data() {
    return {
      hr: 0,
      min: 0,
      sec: 0
    };
  },
  mounted: function() {
    this.countdown();
  },
  methods: {
    countdown: function() {
      const end = Date.parse(new Date("2019-8-16"));
      const now = Date.parse(new Date());
      const msec = end - now;
      let day = parseInt(msec / 1000 / 60 / 60 / 24);
      let hr = parseInt((msec / 1000 / 60 / 60) % 24);
      let min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);
      this.day = day;
      this.hr = hr > 9 ? hr : "0" + hr;
      this.min = min > 9 ? min : "0" + min;
      this.sec = sec > 9 ? sec : "0" + sec;
      const that = this;
      setTimeout(function() {
        that.countdown();
      }, 1000);
    }
  }
};
</script>
<style>

.time-countdown{
  font-size: 12px;
  color: #f20c59;
  border: 1px solid #f20c56;
  border-radius: 4px;
  width: 60px;
  padding-bottom: 1px;
  margin-left: 2px;
  display: inline-block;
  vertical-align: middle;
  text-align: center
}
</style>