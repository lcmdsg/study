<template>
  <div>
    <div class="grow">
      <div class="grow-head">
        <div class="grow-head-wrap">
          <div class="input-wrap">
            <img
              src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png"
              alt
            />
            <input type="text" placeholder="新上爆品 120平整屋除湿" />
          </div>
          <div class="backto" @click="backtoindex">取消</div>
        </div>
      </div>
      <div class="grow-body">
        <div class="grow-body-wrap">
          <div class="body-head">
            <div class="body-head-title">热门搜索</div>
          </div>
          <div class="body-list">
            <div class="body-item" v-for="item in list" :key="item">
              <a href="javascript:void(0);">{{item}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grow-hard"></div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      list: [
        "爆款 行李箱",
        "香氛牙膏 谈吐芳香",
        "清弹云朵拖鞋9.9元",
        "中秋节月饼 上新热卖",
        "韩国造 睡眠喷雾",
        "懒人抹布 仅9.9元",
        "拖鞋",
        "枕头",
        "床垫",
        "男士内裤",
        "月饼",
        "猫粮"
      ]
    };
  },
  methods: {
    backtoindex() {
      this.$router.go(-1);
      this.$emit("backtoindex");
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: #333;
}

.grow {
  width: 100%;
  height: 246px;
}

.grow-hard{
  height: 480px;
  background: #eee;
}

.grow-head {
  height: 45px;
}

.grow-head-wrap {
  height: 100%;
  line-height: 30px;
  padding: 8px 15px;
  display: flex;
  flex-direction: row;
}

.input-wrap {
  padding: 0 10px;
  background: #f4f4f4;
  flex-grow: 1;
}

.input-wrap img {
  width: 14px;
  margin-right: 8px;
}

.input-wrap input {
  width: 299px;
  border: none;
  background: #f4f4f4;
  line-height: 20px;
  font-size: 14px;
}

.backto {
  font-size: 14px;
  margin-left: 15px;
}

.grow-body {
  height: 200px;
}

.grow-body-wrap {
  padding: 0 15px 15px 15px;
}

.body-head {
  height: 45px;
  line-height: 45px;
}

.body-head-title {
  font-size: 14px;
  color: #999;
}

.body-item {
  display: inline-block;
  font-size: 12px;
  padding: 0 8px;
  margin: 0 16px 16px 0;
  border: 1px solid #ddd;
  line-height: 24px;
  border-radius: 4px;
  color: #333;
}
</style>