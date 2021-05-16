<template>
  <div>
      <div class="leftPart">
          <div style="falot:left;">
          <img class="headIcon" src="../assets/img/城市.png">
          <span class="logo">速应</span>
          <span class="headIconP">环境应急管理系统</span>
      </div>
      <div class="loginPanel">
          <p id="bigp" class="word">登录速应</p>
          <p class="word">登录即代表您已
              <span style="font-weight:bold;">阅读并同意</span>
              <u style="color:rgb(23, 123, 204);">服务协议</u>和
              <u style="color:rgb(23, 123, 204);">隐私政策</u></p>
          <div class="LoginCom">
              <p>账号</p>
              <el-input v-model="loginName" placeholder="输入用户名"></el-input>
              <p>密码</p>
              <el-input type="password" v-model="passWord" placeholder="输入密码"></el-input>
          </div>
          <el-button @click="login()"><span style="color:white">Login</span></el-button>
          <p class="word">还没有账号？
              <el-link href="/register" style="color:rgb(23, 123, 204);">立即注册</el-link>
          </p>
          <img class="img" src="../assets/img/登陆方式.png">
      </div>
      </div>
      
      <div class="rightPart">
          <img class="rightImg" src="../assets/img/登录右.jpg" >
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        loginName:'admin',
        passWord:'12345'
    }
  },

  created () {

  },

  methods: {
      login(){
          this.$router.push('/superUser')
      }
  }
}
</script>

<style>
    .leftPart{
        float: left;
    }
    .loginPanel{
        width: 420px;
        height: 520px;
        
        border-radius: 15px;
        margin-left: 300px;
        margin-top: 50px;
        float: left;
        box-shadow: 3px 3px 18px rgba(0, 0, 0, 0.2);

    }
    .LoginCom{
        font-weight:bold;
        padding-left: 14px;
        padding-right: 14px;
        color: rgb(35, 91, 218);
    }
    #bigp{
        font-size: 25px;
        font-weight:bold;
    }
    .word{
        padding-left: 14px;
        padding-right: 14px;
    }
    html,body{
        margin: 0;
        padding: 0;
        height: 100%;
    }
    .el-button{
        text-align:center;
        background:rgb(35, 91, 218);
        color: black;
        margin-top:15px;
        width: 393px;
        margin-left: 13px;
    }
    .img{
        margin-left: 30px;
        margin-top: 10px;
    }
    .headIcon{
        width: 50px;
        margin-left: 30px;
    }
    .logo{
        font-size: 25px;
        font-weight: bold;
        margin-left:5px ;
        color: rgb(35, 91, 218);
    }
    .headIconP{
        font-size: 15px;
        margin-left: 10px;
        color: rgb(97, 97, 97);
    }
    .rightPart{
        float: right;
    }
    .rightImg{
        height: 718px;
    }
</style>
