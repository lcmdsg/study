<template>
  <div>
    <div class="user-container">
      <div class="user-content-img">
        <img src="../../assets/yanxuan-icon.png" alt />
      </div>
      <div class="user-content-login">
        <div class="user-content-number">
          <input class="user-content-input1" type="email" placeholder="邮箱账号" v-model="message"/>
        </div>
        <div class="user-content-number">
          <input class="user-content-input2" type="password" placeholder="密码" v-model="message1" />
        </div>
        <div class="user-content-wrap">
          <span class="user-content-item1">注册账号</span>
          <span class="user-content-item2">忘记密码</span>
        </div>
        
          <div class="user-content-go" @click="login">登录</div>
        
      </div>
      <div class="user-content-other" @click="backtoindex">其他登录方式></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "usermail",
  data() {
    return {
      message:"",
      message1:"",
    };
  },
  methods: {
    backtoindex() {
      this.$emit("sindex", "user");
    },
    login(){
      if(this.message&&this.message1){
        this.$router.push("/")
      }else{
        alert("请输入")
      }
      
    }
  }
};
</script>

<style scope>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.user-container {
  width: 100%;
  height: 403px;
}

.user-content-img {
  width: 100%;
  height: 35px;
  margin: 30px 0;
}

.user-content-img img {
  width: 104px;
  height: 100%;
  position: relative;
  left: 155px;
}

.user-content-login {
  padding: 0 22px;
  margin: 96px 0 32px 0;
}

.user-content-number {
  width: 100%;
  height: 52px;
}

.user-content-input1 {
  width: 100%;
  line-height: 52px;
  border: none;
}

.user-content-input2 {
  width: 100%;
  line-height: 52px;
  border: none;
  border-top: 1px solid #c5cddb;
  border-bottom: 1px solid #c5cddb;
}

.user-content-wrap {
  width: 100%;
  line-height: 52px;
  color: #7f7f7f;
  font-size: 15px;
}

.user-content-item2 {
  position: absolute;
  right: 22px;
}

.user-content-go {
  width: 100%;
  line-height: 52px;
  text-align: center;
  background: #dd1a21;
  color: #fff;
}

.user-content-other {
  text-align: center;
}
</style>