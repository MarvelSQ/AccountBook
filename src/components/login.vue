<template>
<div class="login">
  <el-card class="box-card">
    <el-form>
      <el-form-item>
      <el-input v-model="user.name" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="user.password" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">LogIn</el-button><el-button @click="signup">Register</el-button>
        </el-form-item>
        this is demo test
    </el-form>
  </el-card>
  <!-- <el-alert v-show="alert.show" :title="alert.title" type="error" :description="alert.msg"></el-alert> -->
</div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      user: {
        name: '',
        password: '',
      },
      alert: {
        show: true,
      },
    };
  },
  computed: {
    log() {
      return this.$store.getters.getLog;
    },
    logMsg() {
      return this.$store.getters.getLogMsg;
    },
  },
  watch: {
    log(val) {
      switch (val) {
        case 'log fail':
        case 'signup fail':
          this.$message({
            message: this.logMsg,
            type: 'error',
          });
          break;
        case 'logging':
        case 'signing':
          this.$message({
            message: val,
            type: 'info',
          });
          break;
        case 'signup success':
        case 'logged':
          this.$message({
            message: `${val} jump to home`,
            type: 'success',
          });
          this.$router.push('/');
          break;
        default:
          break;
      }
    },
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.user);
    },
    signup() {
      this.$store.dispatch('signup', this.user);
    },
  },
};
</script>

<style lang="css" scoped>
  .login {
    margin-top: 20%;
  }
  .box-card{
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    color: #666;
  }
  .box-card .el-button{
    width: 100px;
  }

  .el-alert{
    position: fixed;
    top:10px;
    right: 10px;
    width: auto;
    min-width: 150px;
  }
</style>
