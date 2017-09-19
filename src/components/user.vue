<template>
  <div class="user">
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
  };
</script>

<style lang="css" scoped>
  .user {

  }
</style>
