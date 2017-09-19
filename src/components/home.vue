<template>
  <div class="search">
    <!-- <input class="input-sc" placeholder="input your record to search or create one"> -->
    <div class="wrapper">
      <!-- <el-input size="large" placeholder="input your record to search or create one" v-model="inputState" @key-down="selectOption"></el-input>
      <el-card class="result">
        <ul>
          <li v-for="el in records">
            {{el.id}}-{{el.num}}-{{el.name}}
          </li>
        </ul>
      </el-card> -->
      <el-autocomplete
      popper-class="home-results"
      size="large"
      class="inline-input"
      v-model="inputState"
      :fetch-suggestions="querySearch"
      placeholder="input your record to search or create one"
      :trigger-on-focus="false"
      custom-item="my-item-zh"
      @select="handleSelect"
    ></el-autocomplete>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  Vue.component('my-item-zh', {
    functional: true,
    render(h, ctx) {
      const item = ctx.props.item;
      return h('li', ctx.data, [
        h('div', { attrs: { class: 'name' }, domProps: { innerHTML: item.hvalue } }),
        h('span', { attrs: { class: 'addr' }, domProps: { innerHTML: `${item.htype} - ${item.hmoney}` } }),
      ]);
    },
    props: {
      item: { type: Object, required: true },
    },
  });
  export default {
    name: '',
    data() {
      return {
        inputState: '',
        records: [{ id: 'R0001', num: 300, name: 'zhiquan' }, { id: 'R0001', num: 300, name: 'zhiquan' }],
        keyCode: 0,
        // props: {
        //   value: 'value',
        //   label: 'money',
        // },
      };
    },
    methods: {
      selectOption(e) {
        this.keyCode = e.keyCode;
      },
      querySearch(str, cb) {
        str = str.trim();
        let results = [
          { value: 'nini', type: 'old', money: 200 },
          { value: 'anna', type: 'old', money: 420 },
          { value: 'shopping', type: 'old', money: 100 },
          { value: 'running', type: 'old', money: 460 },
          { value: 'enjoy', type: 'old', money: 560 },
          { value: 'sport', type: 'old', money: 77 },
          { value: 'movie', type: 'old', money: 52 },
        ];
        results = results.filter(e => e.value.includes(str) ||
        e.type.includes(str) ||
        String(e.money).includes(str)).map((e) => {
          const reg = new RegExp(str, 'g');
          e.hvalue = e.value.replace(reg, `<b>${str}</b>`);
          e.htype = e.type.replace(reg, `<b>${str}</b>`);
          e.hmoney = String(e.money).replace(reg, `<b>${str}</b>`);
          return e;
        });
        cb([{ hvalue: `<pre>Create a new Record '<b>${str}</b>'</pre>`, value: str, htype: 'new', hmoney: '', create: true }, ...results]);
      },
      handleSelect({ value, create }) {
        if (create) {
          this.$router.push({ name: 'Create', params: { str: value } });
        }
        // eslint-disable-next-line
        console.log('value',value);
      },
    },
    mounted() {},
  };
</script>

<style>
.home-results li b{
  color: #20a0ff;
}
.home-results li.highlighted b{
  color: #ffffff;
}
</style>

<style lang="css" scoped>
  .search {

  }
  .wrapper{
    max-width: 600px;
  }
  .el-input{
    margin-top: 40%;
  }
  .el-card{
    margin-top: 10px;
  }
  .el-card ul{
    list-style:none;
  }
  .el-autocomplete{
    margin-top: 40%;
    width: 100%;
  }

  /*.input-sc{
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 1px 3px 1px #20a0ff;
  }*/
</style>
