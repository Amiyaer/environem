<template>
  <div>
        <!--主页左边部分-->
        <div class="mains">
          <el-avatar :size="70" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
          <span class="title">系统管理员</span>
          <el-divider></el-divider>
          <p class="wait">代办</p>
          <div style="height:300px;width:100%">
              <p style="text-align:center;color:rgb(146, 146, 146);margin-top:100px">暂无代办事项</p>
          </div>
        </div>

        <!--主页右边部分-->
        <div class="asides">
          <p class="title" style="margin:0">个人介绍</p>
          <p>A <span>paragraph</span> of text with an unassigned link.A second row of text with a web link</p>
          <el-divider></el-divider>
          <p class="title" style="margin:0">留言板</p>
          <p>Item One</p>
          <p>Item Two</p>
          <p>Item Three</p>
          <el-divider></el-divider>
        </div>
      
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  created () {

  },

  methods: {

  }
}
</script>

<style>
    .mains{
        width: 800px;
        margin-left: 100px;
        margin-top: 20px;
        height: 100%;
        float: left;
    }
    html,body{
        height: 100%;
    }
    .asides{
        float: right;
        width: 400px;
        margin-top: 20px;
        margin-right:80px ;
    }
    .title{
        font-size:18px;
        color:rgb(146, 146, 146);
        margin-left:20px;
    }
    .wait{
        font-size:22px;
        color:rgb(179, 16, 16)
    }
</style>
