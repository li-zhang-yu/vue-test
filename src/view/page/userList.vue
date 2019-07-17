<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="table_container">
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%">
        <el-table-column
          type="index"
          width="300">
        </el-table-column>
        <el-table-column
          property="register_time"
          label="注册日期"
          width="320">
        </el-table-column>
        <el-table-column
          property="username"
          label="用户姓名">
        </el-table-column>
        <!--<el-table-column-->
          <!--property="address"-->
          <!--label="地址">-->
        <!--</el-table-column>-->
      </el-table>

    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  import headTop from '../../components/headTop'
  import axios from 'axios';
  import qs from 'qs';
  import dateUtil from '../../config/dateUtil';

  export default {
    //组件
    components:{
      headTop
    },

    //数据
    data(){
      return{
        tableData: [{
          register_time: '2016-05-02',
          username: '王小虎'
        }, {
          register_time: '2016-05-04',
          username: '王小虎'
        }, {
          register_time: '2016-05-01',
          username: '王小虎'
        }, {
          register_time: '2016-05-03',
          username: '王小虎'
        }]
      }
    },

    //页面加载的时候
    mounted(){
      this.initData();
    },

    //方法
    methods:{

      //初始化数据
      initData(){
        this.getUserList();
      },

      //获取用户列表信息
      getUserList(){
        var self = this;
        axios.post('/user/userList', qs.stringify()).then( function(response){
            if(response.status == '200'){
              var userList = response.data.dataList;
              self.tableData = [];
              userList.forEach(item =>{
                const tableData = {};
                tableData.username = item.name;
                tableData.register_time = dateUtil.dateToString(item.addTime);
                self.tableData.push(tableData);
                console.log(self.tableData);
              })
            }
          }).catch( function(error){
            console.log(error);
          });
      },

      getUser(){
        var self = this;
        axios.post('/user/getUser', qs.stringify({id: 8})).then( function(response){
          // console.log(response)
          if(response.status == '200'){

          }

        }).catch( function(error){
          console.log(error);
        });
      },


    }

  }
</script>

<style lang="less" scoped>
  @import "../../style/mixin.less";
  .table_container{
    padding: 20px;
  }
</style>
