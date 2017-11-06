<template>
<div id="login-container">
  <img src="../../assets/logo.png">
  <h2>小区净水管理系统</h2>
  <el-form class="login-form" :model="loginForm"> 
    <el-form-item> 
      <el-input prefix-icon="el-icon-star-on" :model="loginForm.username" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input prefix-icon="el-icon-star-on" :model="loginForm.password" placeholder="密码" type="password"></el-input>
    </el-form-item>
    <el-button type="primary" @click.native.prevent="login">登录</el-button>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>
#content {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background: #141a48 url(https://file.iviewui.com/dist/ddb81d457e66ab31d3a2e7726a5b793a.png) no-repeat;
  background-size: cover;
  overflow: hidden;

}

#login-container {
  display: -webkit-flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* margin: 0 auto;
  height: 800px;
  text-align: center;
  width: 400px; */

}
.el-button {
  width: 100%;
}
.el-form {
  width: 400px;
}
input {
  font-size: 16pt;
}
img {
  margin-top: 15vh;
  height: 100%;
}
h2 {
  color: #666666;
  margin-bottom: 50px;
  font-size: 24px;
}

</style>
