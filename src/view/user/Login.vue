<template>
  <div>
    <div class="head">
      <div >
        <span>用户名：<input v-model="usename" placeholder="请输入用户名"/> </span>
      </div>
      <div style="padding-top: 15px">
        <span>密码：<input v-model="password" placeholder="请输入密码"/> </span>
      </div>
      <el-row style="padding-top: 15px">
        <el-button type="primary" plain>注册</el-button>
        <el-button type="success" plain>登陆</el-button>
      </el-row>
    </div>

  </div>
</template>

<script>
    export default {
      data() {
        return {
          username: '',
          password: ''
        }
      }
    }
</script>

<style scoped>
  .head{
    width: 300px;
    padding-left: 500px;
  }
</style>
