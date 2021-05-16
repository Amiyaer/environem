<template>
  <div>
    <el-tabs tab-position="left" class="tabs">
      <el-tab-pane label="首页">
        <!--主页左边部分-->
        <div class="mains">
          <el-avatar
            :size="55"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
          <span class="title">工作人员</span>
          <el-divider></el-divider>
          <p class="wait">代办</p>
          <div style="height: 200px; width: 100%">
            <p
              style="
                text-align: center;
                color: rgb(146, 146, 146);
                margin-top: 50px;
              "
            >
              暂无代办事项
            </p>
          </div>
        </div>

        <!--主页右边部分-->
        <div class="asides">
          <p class="title" style="margin: 0">个人介绍</p>
          <p>
            A <span>paragraph</span> of text with an unassigned link.A second
            row of text with a web link
          </p>
          <el-divider></el-divider>
          <p class="title" style="margin: 0">留言板</p>
          <p>Item One</p>
          <p>Item Two</p>
          <p>Item Three</p>
          <el-divider></el-divider>
        </div>
      </el-tab-pane>
      <el-tab-pane label="事件管理">
        <div class="showEventTreeBox">
          <el-card>
            <el-tag>事件清单</el-tag>
            <div class="eventTree">
              <el-tree
                style=""
                :data="eventTree"
                props=""
                @node-click="handleNodeClick"
              ></el-tree>
            </div>
          </el-card>
          <el-card class="eventInfo">
            <el-tag type="success">事件描述</el-tag>
            <div class="infoDesc">
              <div>
                <div>事件编号</div>
                <div>事件名称</div>
                <div>事件等级</div>
                <div>事件类型</div>
              </div>
              <div>
                <img style="width: 200px" src="../../assets/img/城市.png" />
              </div>
            </div>
            <div>event desc</div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="物资维护">物资维护</el-tab-pane>
      <el-tab-pane label="流程维护">流程维护</el-tab-pane>
      <el-tab-pane label="风险企业维护">风险企业维护</el-tab-pane>
      <el-tab-pane label="城市信息维护">城市信息维护</el-tab-pane>
      <el-tab-pane label="接报维护">接报维护</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventTree: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
    };
  },

  created() {},

  methods: {
    //展示当前事件的基本信息
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>

<style>
.tabs {
  margin-left: 40px;
  margin-top: 30px;
}
.mains {
  width: 500px;
  margin-left: 100px;
  margin-top: 20px;
  height: 100%;
  float: left;
}
html,
body {
  height: 100%;
}
.asides {
  float: right;
  width: 400px;
  margin-top: 20px;
  margin-right: 140px;
}
.title {
  font-size: 18px;
  color: rgb(146, 146, 146);
  margin-left: 20px;
}
.wait {
  font-size: 18px;
  color: rgb(179, 16, 16);
}
.showEventTreeBox {
  display: flex;
  width: 1200px;
  height: 500px;
  flex-direction: row;
  justify-content: space-between;
}
.eventInfo {
  width: 600px;
}
.eventTree {
  width: 500px;
}
.infoDesc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
