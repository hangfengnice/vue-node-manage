<template>
  <div class="login">
    <div class="form_container">
      <div class="manage_tip">
        <span class="title">米修后台管理系统</span>
        <el-form
          :model="loginUser"
          :rules="rules"
          ref="loginForm"
          label-width="80px"
          class="loginForm"
        >
          <el-form-item label="邮箱" prop="email">
            <el-input type="text" v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
          </el-form-item>
          <div class="tiparea">
            <p>
              还没有账号?现在
              <router-link to="/register">注册</router-link>
            </p>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";

export default {
  name: "login",
  components: {},
  data() {
    return {
      loginUser: {
        email: "",
        password: ""
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
            min: 1,
            max: 30,
            message: "1-30个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/api/login", this.loginUser)
            .then(res => {
              const { token } = res.data;
              // 把token存到本地内存
              localStorage.setItem("eleToken", token);
              // 解析token
              const decoded = jwt_decode(token);

              // token 存储到 vuex中
              this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded));
              this.$store.dispatch("setUser", decoded);

              this.$router.push("/index");
            })
            .catch(err => {});
        }
      });
    },
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>

<style lang='scss' scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/fj.png) no-repeat center center;
  background-size: 100% 100%;
  .form_container {
    width: 370px;
    height: 210px;
    position: absolute;
    top: 10%;
    left: 25%;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    .manage_tip {
      .title {
        font-family: "Microsoft YaHei";
        font-weight: bold;
        font-size: 26px;
        color: #fff;
      }
      .loginForm {
        margin-top: 20px;
        background-color: #fff;
        padding: 20px 40px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 10px #ccc;
      }
      .submit_btn {
        width: 100%;
      }
    }
  }
  .tiparea {
    text-align: right;
    font-size: 12px;
    color: #333;
    p a {
      color: #409eff;
    }
  }
}
</style>
