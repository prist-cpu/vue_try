<template>
<div class="bigger">
  <div class="login_mid">
    <!-- 图片区域 -->
    <div class="picture">
      <img src="../assets/X0WGRO7H0T8ZPM_PWGEK1SJ.png" alt="tu">
    </div>
    <!-- 表单验证区域 -->
    <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" label-width="80px" class="login_form">
      <el-form-item label="账号" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <!-- 按钮区域 -->
      <el-form-item class="btns">
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button type="info" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    
  </div>
</div>
</template>

<script>

export default{
  data() {
    return {
      // 登录信息
      loginForm : {
        username : '',
        password : ''
      },
      // 表单验证
      loginRules : {
        username : [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password : [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 2, max: 9, message: '长度在 3 到 9 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {

  },
  methods : {
    // 点击重置表单
    resetForm() {
      this.$refs.loginFormRef.resetFields()
    },
    // 点击提交表单
    // 进行表单验证
    submitForm() {
      this.$refs.loginFormRef.validate(async(valid) => {
        if ( !valid ) return;
        const { data:res } = await this.$http.post('login',this.loginForm)
        if ( res.meta.status !== 200 ) return this.$message.error('登录失败')
        this.$message.success('登录成功！')
        console.log(res.data);
        window.sessionStorage.setItem('token',res.data.token)
        this.$router.push('/home')
      })
    }
   }
}
</script>
<style lang="less" scoped>
.bigger {
  background-color: #809da5;
}
.login_mid {
  width: 600px;
  height: 400px;
  border-radius: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: #e7bc1e;
}
.picture {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #cdbc5b;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  
}
img {
  width: 140px;
  border-radius: 50%;
  border: 2px white solid;
  box-shadow: 0 0 20px rgb(178, 178, 178);
  transform: translateY(10px);
}
.login_form {
  height: 100%;
  padding: 40px;
  position: absolute;
  top: 100px;
}
.el-input {
  width: 400px !important;
}
.btns {
  position: absolute;
  left: 300px;
}
</style>