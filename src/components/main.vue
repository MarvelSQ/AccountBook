<template>
<div class="main">
  <canvas id="back" @click="createBack">
  </canvas>
  <el-menu :title="'hahaha'" :default-active="'/'" :router="true" mode="horizontal">
    <el-menu-item class="disable" index="/"><h2>AccountBook</h2></el-menu-item>
    <el-menu-item index="/list">List</el-menu-item>
    <el-menu-item class="right disable" index="/user"><el-button type="primary">{{user?user.name:'logging'}}</el-button></el-menu-item>
    <el-menu-item class="right disable" index="/create"><el-button>New Record</el-button></el-menu-item>
  </el-menu>
  <router-view class="router-view"></router-view>
</div>
</template>
<script>
import {
  mapGetters,
} from 'vuex';

export default {
  name: 'main',
  computed: {
    ...mapGetters({
      records: 'records',
      log: 'getLog',
      user: 'getUser',
      logMsg: 'getLogMsg',
    }),
  },
  methods: {
    createBack() {
      const back = document.getElementById('back');
      const w = window.innerWidth;
      const h = window.innerHeight;
      const pr = window.devicePixelRatio || 1;

      back.width = w * pr;
      back.height = (h - 60) * pr;

      const c = back.getContext('2d');
      c.scale(pr, pr);

      // c.moveTo(window.innerWidth, window.innerHeight);
      c.fillStyle = 'rgb(152,152,152)';
      // c.fillRect(0, h / 2, 100, 100);

      // c.beginPath();
      // c.moveTo(w / 2, 0);
      // c.lineTo(w / 2, 80);
      // c.lineTo((w / 2) + 30, 40);
      // c.closePath();
      // c.fill();


      // c.beginPath();
      // c.moveTo(w / 2, 0);
      // c.lineTo(w / 2, 80);
      // c.lineTo((w / 2) - 30, 40);
      // c.closePath();
      // c.stroke();
      //
      // c.fillRect(w / 2, (h - 60) / 2, 10, 10);
      // c.closePath();

      // arc(x,y,radius,startAngle,endAngle,anticlockwise)
      c.fillStyle = 'rgba(66,66,66,0.4)';
      // c.moveTo((w / 2) + 30, h / 2);
      // c.arc(w / 2, h / 2, 30, 0, Math.PI, true);
      // c.stroke();
      //
      // c.moveTo((w / 2) + 60, h / 2);
      // c.quadraticCurveTo((w / 2) + 80, (h / 2) - 30, (w / 2) + 100, (h / 2) - 30);
      // c.stroke();
      //
      // c.moveTo((w / 2) + 120, h / 2);
      // c.bezierCurveTo((w / 2) + 140, h / 2,
      //   (w / 2) + 140, (h / 2) - 30, (w / 2) + 160, (h / 2) - 30);
      // c.stroke();

      c.font = '40px sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'hanging';
      c.translate(w / 2, h * 0.3);

      // c.moveTo((w / 2) + 100, (h / 2) - 80);
      const acs = ['shopping', 'sport', 'entertain', 'food', 'travel'];
      // eslint-disable-next-line
      for (let i = 0; i < 30; i++) {
        c.save();
        c.font = `${Math.round(Math.random() * 25) + 5}px sans-serif`;
        c.rotate(Math.PI * ((Math.random() * 2) - 1));
        c.fillText(`${i / 2 === 0 ? '$' : '¥'} ${Math.round(Math.random() * 600) + 10} ${acs[i % 5]}`, 0, (i * 20) + 200);
        c.restore();
      }
      // c.rotate(-Math.PI / 6);
      // eslint-disable-next-line
      // console.log(c);
      // c.fillText('¥ 20 小王', 0, 40);
    },
  },
  beforeCreate() {
    // eslint-disable-next-line
    // console.log(this.log);
  },
  created() {
    // eslint-disable-next-line
    if(this.user == undefined) {
      this.$store.dispatch('hasUser');
    }
  },
  beforeMount() {
    // eslint-disable-next-line
    // console.log(this.log);
  },
  mounted() {
    // eslint-disable-next-line
    // console.log(this.log);
    // if (!this.log.logged) {
    //   this.$store.dispatch('jumpLog', () => this.$router.push('/login'));
    // }
    this.createBack();
  },
  updated() {
    this.createBack();
  },
  watch: {
    log(val, oldVal) {
      // eslint-disable-next-line
      console.log(val, oldVal);
      switch (val) {
        case 'unlog':
        case 'log fail':
          this.$message({
            message: this.logMsg,
            type: 'warning',
          });
          this.$router.push('/login');
          break;
        case 'logging':
          this.$message({
            message: val,
            type: 'info',
          });
          break;
        case 'logged':
          this.$message({
            message: val,
            type: 'success',
          });
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style>
@media screen and (min-width:640px) {
  .wrapper{
    margin-left: auto;
    margin-right: auto;
  }
  }
@media screen and (max-width:640px) {
  .wrapper{
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>

<style lang="css" scoped>
  .main {
    height: 100%;
    /*position: relative;*/
    display: flex;
    flex-direction: column;
  }
  /*.menu{
    height: 100%;
    width: 200px;
    float: left;
    background-color: #ffffff;
  }
  .content{
    height: 100%;
    background-color: #efefef;
  }
  .inner{
    width: 100px;
  }
  .progress{
    background-color:#191919;
    height:10px;
    margin-left:auto;
    margin-right:auto;
  }*/
  .el-menu{
    background-color: transparent;
    z-index: 100;
  }
  .el-menu-item>h2{
    color: #20a0ff;
  }
  .el-menu-item.right{
    float: right;
  }
  .el-menu-item.disable:hover{
    background-color: inherit;
    border-bottom: 5px solid transparent;;
  }
  .router-view{
    flex-grow: 1;
    position: relative;
    /*top: 60px;
    bottom: 0;
    left: 0;
    right: 0;*/
    overflow-y: scroll;
    z-index: 10;
  }
  #back{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
  }
</style>
