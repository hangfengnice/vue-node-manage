<template>
  <div class="login">
    <section class="from_container">
      <div class="manage_tip">
        <span class="title">小猪在线后台管理系统</span>
        <el-form
          :model="loginUser"
          :rules="rules"
          ref="loginFrom"
          label-width="60px"
          class="loginForm"
        >
       
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="submit_btn" @click="submitForm('loginFrom')">立即登录</el-button>
          </el-form-item>
          <div class="tiparea">
            <p>还没有账号?现在 <router-link to='/register'>注册</router-link></p>
          </div>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
   
    return {
      loginUser: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: "6",
            message: "不能小于6位",
            trigger: "blur"
          }
        
        ]
      }
    };
  },
  created(){
    if(localStorage.token){
      const data = JSON.parse(localStorage.token)
      this.$store.dispatch('setAuthenticated',!this.isEmpty(data))
      this.$store.dispatch('setUser',data)
    }
  },
  methods:{
    //  submitForm(formName) {

    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         this.$axios.post('/api/users/login',this.loginUser)
    //         .then(res => {
    //         //  console.log(res.data.data)
    //         const data = res.data.data
    //          window.localStorage.setItem('token',JSON.stringify(data))
    //          this.$store.dispatch('setAuthenticated',!this.isEmpty(data))
    //          this.$store.dispatch('setUser',data)
    //          this.$router.push('/index')
    //         })

            
    //       } 
    //     });
    //   },
      isEmpty(value){
        return (
          value === undefined ||
          value === null || 
          (typeof value === "object" && Object.keys(value).length === 0 ) || 
          (typeof value === 'string' && value.trim().length === 0) 
        )
      }
      
  }
};
</script>

<style scoped>

.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/chengdu.jpg);
  background-size: 100% 100%;
}
.from_container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}

.from_container .manage_tip .title {
  font-family: "Microsoft YaHei";

  font-size: 26px;
  color: #fff;
  display: block;
}
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0 5px 10px #ccc;
  margin-top: 15px;
}
.submit_btn {
  width: 100%;
}
.tiparea{
  text-align: cneter;
  font-size: 12px;
  color: #333;

}
.tiparea p a{
  color: #409eff;
}

</style>
