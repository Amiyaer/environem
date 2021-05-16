<template>
  <div>
    <div class="background">
      <img src="../../assets/img/背景大图.jpg" width="100%" height="100%"/>
    </div>
    <el-container>
      <el-header>
        <div>
          <el-menu :default-active="defaultActive" class="el-menu" mode="horizontal" :router="true">
            <span name="icon" style="float:left;margin-right:30px">
              <img class="headIcon" src="../../assets/img/城市.png">
              <span class="logo">速应</span>
              <span class="headIconP">环境应急管理系统</span>
            </span>
            <el-menu-item index="/staffHome">主页</el-menu-item>
            <el-menu-item index="/staffHelp">帮助</el-menu-item>
            <el-dropdown style="float:right;margin-top:10px" @command="logout">
                <el-avatar size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item >退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
          </el-menu>
          
        </div>
      </el-header>
      <el-main>
        <!--路由占位-->
        <router-view/>
      </el-main>
    </el-container>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultActive:this.$route.path
    }
  },

  created () {

  },

  methods: {
    logout(){
      this.$router.push("/Login");
      console.log('logout');
    }
  }
}
</script>

<style>
    .headIcon{
        width: 50px;
        margin-left: 30px;
    }
    .headIconP{
        font-size: 25px;
        margin-left: 10px;
        color: rgb(97, 97, 97);
    }
    .logo{
        font-size: 25px;
        font-weight: bold;
        margin-left:5px ;
        color: rgb(88, 140, 252);
    }
    .background{
      width:100%;   
      height:100%;  /**宽高100%是为了图片铺满屏幕 */
      z-index:-1;
      position: absolute;
      opacity:0.3;
    }
    html,body{
      padding: 0;
      margin: 0;
    }
</style>