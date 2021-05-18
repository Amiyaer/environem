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
<!--      TODO-->
      <el-tab-pane label="物资维护">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="物资信息维护" name="first">
            <div style="float: left;margin: 30px">
              <div>
                <el-button type="primary" @click="add" icon="el-icon-plus" >添加</el-button>

                <el-dialog title="添加/修改物资信息" :visible.sync="dialogFormVisible">
                  <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="物资名">
                      <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="物资数">
                      <el-input v-model="form.num"></el-input>
                    </el-form-item>
                    <el-form-item label="物资类型">
                      <el-input v-model="form.type"></el-input>
                    </el-form-item>
                    <el-form-item label="物资清点人">
                      <el-input v-model="form.people"></el-input>
                    </el-form-item>
                    <el-form-item label="清点人电话">
                      <el-input v-model="form.tel"></el-input>
                    </el-form-item>
                    <el-form-item label="物资编号">
                      <el-input v-model="form.no"></el-input>
                    </el-form-item>
                    <el-form-item label="物资清点时">
                      <el-date-picker type="date" value-format=yyyy-MM-dd format=yyyy-MM-dd placeholder="选择日期" v-model="form.time" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="onSubmit">确 定</el-button>
                  </div>
                </el-dialog>

                <el-button type="danger" style="margin-left: 20px" icon="el-icon-delete" @click="deleteSelect" >删除</el-button>
                <el-input style="width: 500px; float: right" placeholder="search" v-model="input3" class="input-with-select">
                  <el-button slot="append" @click="search" icon="el-icon-search">搜索</el-button>
                </el-input>
              </div>
              <div>
                <el-table
                        stripe
                        ref="multipleTable"
                        :data="tableData"
                        @row-dblclick="row_click"
                        tooltip-effect="dark"
                        style="width: 900px"
                        @selection-change="handleSelectionChange">
                  <el-table-column
                          type="selection"
                          width="50">
                  </el-table-column>
                  <el-table-column
                          prop="id"
                          label="ID"
                          width="40">
                  </el-table-column>
                  <el-table-column
                          prop="name"
                          label="物资名"
                          width="80">
                  </el-table-column>
                  <el-table-column
                          prop="num"
                          label="物资数"
                          width="70">
                  </el-table-column>
                  <el-table-column
                          prop="type"
                          label="物资类"
                          width="80">
                  </el-table-column>
                  <el-table-column
                          prop="people"
                          label="物资清点人"
                          width="100">
                  </el-table-column>
                  <el-table-column
                          prop="tel"
                          label="清点人电话"
                          width="120">
                  </el-table-column>
                  <el-table-column
                          prop="no"
                          label="物资编号"
                          width="80">
                  </el-table-column>

                  <el-table-column
                          prop="time"
                          label="物资清点时"
                          width="110">
                  </el-table-column>
                  <el-table-column >
                    <template slot="header" slot-scope="scope">
                      <p>操作</p>
                    </template>
                    <template slot-scope="scope">
                      <el-button
                              size="mini"
                              type="success"
                              @click="tableEdit(scope.$index, scope.row)">Edit</el-button>
                      <el-button
                              size="mini"
                              type="danger"
                              @click="tableDel(scope.$index, scope.row)">Delete</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
            <el-card  style="float: right;border-radius: 30px;padding: 20px;margin: 20px">
                  <Strong><p style="font-size: 28px; margin-bottom: 1px">物资信息</p></Strong>
              <div class="info-user">
                <p>ID:  <span>{{form.id}}</span></p>
                <p>物资名:  <span>{{form.name}}</span></p>
                <p>物资数:  <span>{{form.num}}</span></p>
                <p>物资类型:  <span>{{form.type}}</span></p>
                <p>物资清点人:  <span>{{form.people}}</span></p>
                <p>清点人电话:  <span>{{form.tel}}</span></p>
                <p>物资编号:  <span>{{form.no}}</span></p>
                <p>物资清点时间:  <span>{{form.time}}</span></p>
              </div>
              <div>
                <el-button type="primary" @click="editInfo" icon="el-icon-edit" round>修改</el-button>
                <el-button type="danger" @click="deleteInfo" icon="el-icon-delete" round>删除</el-button>

              </div>

            </el-card>

          </el-tab-pane>
          <el-tab-pane label="物资位置信息维护" name="second">
            <div style="float: left;margin: 30px">
              <div>
                <el-button type="primary" @click="add2" icon="el-icon-plus" >添加</el-button>

                <el-dialog title="添加/修改物资位置信息" :visible.sync="dialogFormVisible2">
                  <el-form ref="form" :model="form2" label-width="100px">
                    <el-form-item label="物资存放名称">
                      <el-input v-model="form2.name"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                    <el-button type="primary" @click="onSubmit2">确 定</el-button>
                  </div>
                </el-dialog>

                <el-button type="danger" style="margin-left: 20px" icon="el-icon-delete" @click="deleteSelect2" >删除</el-button>
                <el-input style="width: 300px; float: right" placeholder="search" v-model="input4" class="input-with-select">
                  <el-button slot="append" @click="search2" icon="el-icon-search">搜索</el-button>
                </el-input>
              </div>
              <div>
                <el-table
                        stripe
                        ref="multipleTable"
                        :data="tableData2"
                        @row-dblclick="row_click2"
                        tooltip-effect="dark"
                        style="width: 700px"
                        @selection-change="handleSelectionChange2">
                  <el-table-column
                          type="selection"
                          width="50">
                  </el-table-column>
                  <el-table-column
                          prop="id"
                          label="ID"
                          width="40">
                  </el-table-column>
                  <el-table-column
                          prop="name"
                          label="物资名"
                          width="120">
                  </el-table-column>

                  <el-table-column label="物资内容" align="center" width="200">
                    <template slot-scope="scope">
                      <span v-for="(item, index) in tableData2[scope.$index].content" :key="index">
                         {{ index == tableData2[scope.$index].content.length-1 && item.name || (item.name + ',') }}
                      </span>
                    </template>
                  </el-table-column>
                  <el-table-column >
                    <template slot="header" slot-scope="scope">
                      <p>操作</p>
                    </template>
                    <template slot-scope="scope">
                      <el-button
                              size="mini"
                              type="success"
                              @click="tableEdit2(scope.$index, scope.row)">Edit</el-button>
                      <el-button
                              size="mini"
                              type="danger"
                              @click="tableDel2(scope.$index, scope.row)">Delete</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
            <el-card  style="float: right;border-radius: 12px;padding-left: 10px;padding-right: 10px;margin-right: 130px">
              <Strong><p style="font-size: 28px">物资位置信息维护</p></Strong>
              <div>
                <p>ID:  <span>{{form2.id}}</span></p>
                <p>物资存放名称:  <span>{{form2.name}}</span></p>
                <p><span><Strong>物资内容: </Strong><el-button style="float: right" type="primary" size="small" @click="add3" icon="el-icon-plus" >添加</el-button></span></p>
                <el-dialog title="添加/修改物资位置的内容信息" :visible.sync="dialogFormVisible3">
                  <el-form ref="form" :model="form3" label-width="100px">
                    <el-form-item label="物资存放名称">
                      <el-input v-model="form3.name"></el-input>
                    </el-form-item>
                    <el-form-item label="数量">
                      <el-input v-model="form3.num"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible3 = false">取 消</el-button>
                    <el-button type="primary" @click="onSubmit3">确 定</el-button>
                  </div>
                </el-dialog>
                <el-table
                        :data="form2.content">
                  <el-table-column
                          prop="name"
                          label="名称"
                          width="120">
                  </el-table-column>
                  <el-table-column
                          prop="num"
                          label="数量"
                  width="60">
                  </el-table-column>
                  <el-table-column width="120">
                    <template slot="header" slot-scope="scope">
                      <p>操作</p>
                    </template>
                    <template slot-scope="scope">
                      <el-button
                              size="mini"
                              type="success"
                              icon="el-icon-edit"
                              @click="tableEdit3(scope.$index, scope.row)"></el-button>
                      <el-button
                              size="mini"
                              type="danger"
                              icon="el-icon-delete"
                              @click="tableDel3(scope.$index, scope.row)"></el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div style="margin-top: 20px">
                <el-button type="primary"  @click="editInfo2" size="small" icon="el-icon-edit" round>修改</el-button>
                <el-button type="danger" style="float: right" @click="deleteInfo2" size="small" icon="el-icon-delete" round>删除</el-button>
              </div>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>

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
      input3:"",
      ids:[],
      command:0,
      dialogFormVisible: false,
      form: {
        id:1,
        name:'矿泉水',
        num:"50件",
        type:"生命救助",
        tel:"18840646666",
        people:"李华",
        no:'001',
        time: '2016-05-02'
      },
      formLabelWidth: '70px',
      tableData: [],
      database: [{
        id:1,
        name:'矿泉水',
        num:"50件",
        tel:"18840646666",
        type:"生命救助",
        people:"李华",
        no:'001',
        time: '2016-05-02'
      },{
        id:1,
        name:'矿泉水',
        num:"50件",
        type:"生命救助",
        tel:"18840646666",
        people:"李华",
        no:'001',
        time: '2016-05-02'
      }],
      start:0,
      activeName: 'second',
      //-------------------------
      input4:"",
      ids2:[],
      command2:0,
      dialogFormVisible2: false,
      form2: {
        id:1,
        name:'求生三件套',
        content:[{
            name:'矿泉水',
            num:"50"
          },{
            name:'衣物',
            num:"10"
        }]
      },
      formLabelWidth2: '70px',
      tableData2: [],
      database2: [{
        id:1,
        name:'求生三件套',
        content:[{
          name:'矿泉水',
          num:"50"
        },{
          name:'衣物',
          num:"10"
        }]
      },{
        id:2,
        name:'求生三件套',
        content:[{
          name:'矿泉水',
          num:"20"
        },{
          name:'衣物',
          num:"1"
        }]
      }],
      //-----------------------------------
      dialogFormVisible3:false,
      form3: {
      },
      command3:0,

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

  created() {
    this.tableData = this.database;
    this.tableData2 = this.database2;
  },

  methods: {
    //展示当前事件的基本信息
    handleNodeClick(data) {
      console.log(data);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //物资管理--------------------------------------
    row_click(val){
      this.form = val;
    },
    handleSelectionChange(row){
      console.log(row)
      this.ids = row;
    },

    search(){
      let users = this.tableData;
      for (let i = users.length - 1; i >= 0 ; i--) {
        if(users[i].name.indexOf(this.input3) < 0){
          this.tableData.splice(i,1);
        }
      }
    },
    onSubmit() {
      this.dialogFormVisible = false;
      console.log(this.command)
      if(this.command == 1){
        this.form.id = this.tableData[this.tableData.length-1].id + 1;
        this.database.push(this.form);
      }else{
        let users = this.tableData;
        for (let i = 0; i < users.length; i++) {
          if(users[i].id == this.form.id){
            users[i] = this.form;
            break;
          }
        }
      }
      this.command = 0;
    },
    add(){
      this.dialogFormVisible = true;
      this.command = 1;
      this.form = {};
    },
    editInfo(){
      this.dialogFormVisible = true;
      this.command = 2;
    },
    tableEdit(index,row){
      this.dialogFormVisible = true;
      this.command = 3;
      this.form = row;
    },
    tableDel(index,row){
      let users = this.tableData;
      for (let i = 0; i < users.length; i++) {
        if(users[i].id == row.id){
          users.splice(i,1);
          break;
        }
      }
    },
    deleteSelect(){
      let id = this.form.id;
      for (let id1 of this.ids) {
        this.form.id = id1.id;
        this.deleteInfo();
      }
      this.form.id = id;
    },
    deleteInfo(){
      let users = this.tableData;
      for (let i = 0; i < users.length; i++) {
        if(users[i].id == this.form.id){
          users.splice(i,1);
          break;
        }
      }
    },
    // 物资位置管理--------------------------------------------------
    row_click2(val){
      this.form2 = val;
    },
    handleSelectionChange2(row){
      this.ids2 = row;
    },

    search2(){
      let users = this.tableData2;
      for (let i = users.length - 1; i >= 0 ; i--) {
        if(users[i].name.indexOf(this.input4) < 0){
          this.tableData2.splice(i,1);
        }
      }
    },
    onSubmit2() {
      this.dialogFormVisible2 = false;
      if(this.command2 == 1){
        this.form2.id = this.tableData2[this.tableData2.length-1].id + 1;
        this.database2.push(this.form2);
      }else{
        let users = this.tableData2;
        for (let i = 0; i < users.length; i++) {
          if(users[i].id == this.form2.id){
            users[i] = this.form2;
            break;
          }
        }
      }
      this.command2 = 0;
    },
    add2(){
      this.dialogFormVisible2 = true;
      this.command2 = 1;
      this.form2 = {};
    },
    editInfo2(){
      this.dialogFormVisible2 = true;
      this.command2 = 2;
    },
    tableEdit2(index,row){
      this.dialogFormVisible2 = true;
      this.command2 = 3;
      this.form2 = row;
    },
    tableDel2(index,row){
      let users = this.tableData2;
      for (let i = 0; i < users.length; i++) {
        if(users[i].id == row.id){
          users.splice(i,1);
          break;
        }
      }
    },
    deleteSelect2(){
      let id = this.form2.id;
      for (let id1 of this.ids2) {
        this.form2.id = id1.id;
        this.deleteInfo2();
      }
      this.form2.id = id;
    },
    deleteInfo2(){
      let users = this.tableData2;
      for (let i = 0; i < users.length; i++) {
        if(users[i].id == this.form2.id){
          users.splice(i,1);
          break;
        }
      }
      this.form2={}
    },
    //--------------------------------------------------------
    searchIndex(){
      let users = this.tableData2;
      for (let i = 0; i < users.length; i++) {
        if(users[i].id == this.form2.id){
          return i;
        }
      }
      this.form2={}
    },
    onSubmit3() {
      this.dialogFormVisible3 = false;
      if(this.command3 == 1){
        this.tableData2[this.searchIndex()].content.push(this.form3);
        this.form2.content = this.tableData2[this.searchIndex()].content;
      }else{
        let users = this.form2.content;
        for (let i = 0; i < users.length; i++) {
          if(users[i].id == this.form3.id){
            users[i] = this.form3;
            break;
          }
        }
      }
      this.command3 = 0;
    },
    add3(){
      this.dialogFormVisible3 = true;
      this.command3=1;
      this.form3={}
    },
    tableEdit3(index,row){
      this.dialogFormVisible3 = true;
      this.command3 = 3;
      this.form3 = row;
    },
    tableDel3(index,row){
      let users = this.form2.content;
      for (let i = 0; i < users.length; i++) {
        if(users[i].name == row.name){
          users.splice(i,1);
          break;
        }
      }
    }
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
