<template>
  <div class="user wrapper">
    <img src="/static/test.png" height="261" srcset="/static/test@2x.png 2x"/>
    <div>{{user.name}}</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: '',
    computed: {
      ...mapGetters({
        user: 'getUser',
      }),
    },
    methods: {
      drawBanner() {
        const banner = document.getElementById('banner');
        banner.getContext('2d');
      },
    },
    mounted() {
      this.drawBanner();
    },
  };
</script>

<style lang="stylus" scoped>
  .user
    width:600px;
    padding-top:10px;
    div
      color:#555555;
      font-size:24px;
    #banner
    img
      border-radius:10px;
      box-shadow: 0px 1px 8px rgba(144,144,144,0.8);
      /*background-color: #FF4712;*/
</style>
