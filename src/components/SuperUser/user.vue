<template>
    <div>
        <div style="float: left;margin: 30px">
            <div>
                <el-button type="primary" @click="add" icon="el-icon-plus" >添加</el-button>

                <el-dialog title="添加/修改速应用户" :visible.sync="dialogFormVisible">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="账号">
                            <el-input v-model="form.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-radio-group v-model="form.sex">
                                <el-radio label="男">男</el-radio>
                                <el-radio label="女">女</el-radio>
                            </el-radio-group>
                        </el-form-item>


                        <el-form-item label="出生日期">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="住址">
                            <el-input v-model="form.address"></el-input>
                        </el-form-item>
                        <el-form-item label="会员类型">
                            <el-select v-model="form.peopleType" placeholder="请选择用户类型">
                                <el-option label="工作人员" value="工作人员"></el-option>
                                <el-option label="指挥人员" value="指挥人员"></el-option>
                                <el-option label="专家人员" value="专家人员"></el-option>
                                <el-option label="管理员"   value="管理员" ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="账号状态">
                            <el-radio-group v-model="form.status">
                                <el-radio label="停用">停用</el-radio>
                                <el-radio label="正常">正常</el-radio>
                            </el-radio-group>
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
                        style="width: 1000px"
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
                            prop="username"
                            label="账号"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="password"
                            label="密码"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            prop="age"
                            label="年龄"
                            width="50">
                    </el-table-column>
                    <el-table-column
                            prop="peopleNo"
                            label="人员编号"
                            width="80">
                    </el-table-column>

                    <el-table-column
                            prop="status"
                            label="账号状态"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地址"
                            width="250">
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
        <el-card  style="float: right;border-radius: 30px;padding-left: 30px;padding-right: 30px;padding-bottom: 20px; margin-right: 66px;margin-top: 40px">

            <div>
                <el-avatar style="margin-top: 20px" :size="80" :src="circleUrl"></el-avatar>
                <div style="float: right">
                    <Strong><p style="font-size: 28px; margin-bottom: 1px">{{form.name}}</p></Strong>
                    <el-tag type="success" size="small" >{{form.peopleType}}</el-tag>
                </div>
            </div>
            <div class="info-user">
                <p>ID:  <span>{{form.id}}</span></p>
                <p>账号:  <span>{{form.username}}</span></p>
                <p>密码:  <span>{{form.password}}</span></p>
                <p>性别:  <span>{{form.sex}}</span></p>
                <p>年龄:  <span>{{form.age}}</span></p>
                <p>人员编号:  <span>{{form.peopleNo}}</span></p>
                <p>人员类型:  <span>{{form.peopleType}}</span></p>
                <p>账号状态:  <span>{{form.status}}</span></p>
            </div>
            <div>
                <el-button type="primary" @click="editInfo" icon="el-icon-edit" round>修改</el-button>
                <el-button type="danger" @click="deleteInfo" icon="el-icon-delete" round>删除</el-button>

            </div>

        </el-card>


    </div>
</template>

<script>
    export default {
        data () {
            return {
                input3:"",
                ids:[],
                command:0,
                dialogFormVisible: false,
                form: {
                    id:1,
                    username:'HelloWord',
                    password:'123456',
                    age:18,
                    peopleNo:"001",
                    status:'正常',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    peopleType:"工作人员",
                    sex:"男"
                },
                formLabelWidth: '70px',
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                tableData: [],
                database: [{
                    id:1,
                    username:'HelloWord',
                    password:'123456',
                    age:18,
                    peopleNo:"001",
                    status:'正常',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    peopleType:"工作人员",
                    sex:"男"
                },{
                    id:2,
                    username:'HelloWord',
                    password:'123456',
                    age:18,
                    peopleNo:"001",
                    status:'正常',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    peopleType:"工作人员",
                    sex:"男"
                },{
                    id:3,
                    username:'HelloWord',
                    password:'123456',
                    age:18,
                    peopleNo:"001",
                    status:'正常',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    peopleType:"工作人员",
                    sex:"男"
                },{
                    id:4,
                    username:'HelloWord',
                    password:'123456',
                    age:18,
                    peopleNo:"001",
                    status:'正常',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    peopleType:"工作人员",
                    sex:"男"
                },{
                    id:5,
                    username:'HelloWord',
                    password:'123456',
                    age:18,
                    peopleNo:"001",
                    status:'正常',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    peopleType:"工作人员",
                    sex:"男"
                },{
                    id:6,
                    username:'HelloWord',
                    password:'123456',
                    age:18,
                    peopleNo:"001",
                    status:'正常',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    peopleType:"工作人员",
                    sex:"男"
                },{
                    id:7,
                    username:'HelloWord',
                    password:'123456',
                    age:18,
                    peopleNo:"001",
                    status:'正常',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    peopleType:"工作人员",
                    sex:"男"
                },{
                    id:8,
                    username:'HelloWord',
                    password:'123456',
                    age:18,
                    peopleNo:"001",
                    status:'正常',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    peopleType:"工作人员",
                    sex:"男"
                },{
                    id:9,
                    username:'HelloWord',
                    password:'123456',
                    age:18,
                    peopleNo:"001",
                    status:'正常',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    peopleType:"工作人员",
                    sex:"男"
                }],
                start:0
            }
        },

        created () {

        },
        mounted:function(){
            this.createcode();//需要触发的函数
        },

        methods: {
            createcode(){
                this.tableData = this.database;
            },
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
                    //id peopleNo 地址 age
                    let u = this.database;
                    let id = u[u.length - 1].id + 1;
                    let peopleNo = "002";

                    let birthdays = new Date(this.form.date);
                    let d = new Date();
                    let age =
                        d.getFullYear() -
                        birthdays.getFullYear() -
                        (d.getMonth() < birthdays.getMonth() ||
                        (d.getMonth() == birthdays.getMonth() &&
                            d.getDate() < birthdays.getDate())
                            ? 1
                            : 0);

                    this.form.id = id;
                    this.form.peopleNo = peopleNo;
                    this.form.age = age;
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
                let users = this.tableData;
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
            }
        }
    }
</script>

<style>
    .info-user span{
        margin-left: 10px;
    }
</style>

