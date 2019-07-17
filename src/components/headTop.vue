<template>
   <div class="header_container">
     <el-breadcrumb separator="/">
       <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
       <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
     </el-breadcrumb>
     <el-dropdown @command="handleCommand">
        <!--<span class="el-dropdown-link">-->
          <!--下拉菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
        <!--</span>-->
       <img :src="circleUrl" class="avator">
       <el-dropdown-menu slot="dropdown">
         <el-dropdown-item command="home">首页</el-dropdown-item>
         <el-dropdown-item command="signout">退出</el-dropdown-item>
       </el-dropdown-menu>
     </el-dropdown>
   </div>
</template>

<script>

  import {baseImgPath} from '../config/env';
  import {mapActions, mapState} from 'vuex'
    export default {
        data(){
          return{
            baseImgPath,
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          }
        },
        mounted:{

        },
        computed:{
          ...mapState(['adminInfo']),
        },
        methods:{

          handleCommand(command) {
            if(command == 'home'){
              this.$router.push({path: '/manage'})
            }
            this.$message('click on item ' + command);
          }


        },
    }
</script>

<style lang="less" scoped>
  @import "../style/mixin.less";
  .header_container{
    background-color: #EFF2F7;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }

  .avator{
    .wh(36px, 36px);
      border-radius: 50%;
      margin-right: 37px;
  }


</style>
