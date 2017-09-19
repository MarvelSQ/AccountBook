<template>
  <div class="create">
    <!-- <div v-if="showModal" class="modal">
      <el-card>
        <el-button v-for="mate in form.mates" :key="mate.id" @click="mateClick(mate.id)">{{mate.name}}</el-button>
      </el-card>
    </div> -->
    <el-dialog title="mates" :visible.sync="showModal" size="large">
      <el-button v-for="mate in form.mates" :key="mate.id" @click="mateClick(mate.id)">{{mate.name}}</el-button>
    </el-dialog>
    <el-card class="wrapper">
    <el-form ref="form" :model="form" label-width="80px" :label-position="align">
      <el-form-item label="title">
        <el-input v-model="form.title" placeholder="title"></el-input>
      </el-form-item>
      <el-form-item label="description">
        <el-input v-model="form.description" placeholder="more info"></el-input>
      </el-form-item>
      <el-form-item label="type">
        <el-select v-if="wWidth < 500" v-model="form.type" placeholder="type">
          <el-option v-for="type in form.types" :key="type.id" :value="type"></el-option>
        </el-select>
        <el-radio-group v-else v-model="form.type">
          <el-radio-button v-for="type in form.types" :key="type.key" :label="type"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="money">
        <el-input v-model.number="form.money" placeholder="enter a new mate"></el-input>
      </el-form-item>
      <el-form-item label="mates">
        <el-autocomplete
        popper-class="home-results"
        class="inline-input"
        v-model="form.newMate"
        :fetch-suggestions="queryMate"
        placeholder="enter a new mate"
        :trigger-on-focus="false"
        @select="addMate">
        </el-autocomplete>
        <el-button v-for="mate in form.mates.length > 3 ? [...form.mates.slice(0,3),{id:'99999',name:'more'}] : form.mates" :key="mate.id" @click="mateClick(mate.id)">{{mate.name}}</el-button>
      </el-form-item>
      <el-form-item label="date">
        <el-date-picker type="date" format="yyyy-MM-dd" placeholder="create date" v-model="form.date" style="width:100%;"></el-date-picker>
      </el-form-item>
        <el-button type="primary" @click="createRecord">add to records</el-button>
        <el-button>reset</el-button>
        <el-button type="danger" @click="cancelCreate">cancel</el-button>
    </el-form>
  </el-card>
  </div>
</template>

<script>
  export default {
    name: '',
    computed: {
      str() {
        return this.$route.params.str ? this.$route.params.str : '';
      },
      // wWidth() {
      //   return window ? window.innerWidth : 640;
      // },
    },
    data() {
      return {
        form: {
          title: '',
          description: '',
          type: '',
          types: ['enjoy', 'work', 'sport', 'movie', 'food'],
          money: 0,
          mates: [{ id: 'A0001', name: 'zhiquan' }, { id: 'A0002', name: 'changlin' }],
          newMate: '',
          date: new Date(), // TODO change date YYYYMMDD
        },
        align: 'left',
        from: '/',
        wWidth: 640,
        showModal: false,
        // props: {
        //   value: 'name',
        // },
      };
    },
    watched: {
      // window(...all) {
      //   // eslint-disable-next-line
      //   console.log(all);
      // },
    },
    methods: {
      addMate({ id, name }) {
        // eslint-disable-next-line
        // console.log(all);
        this.form.mates.push({ id: id === '00000' ? this.form.mates.length + 5 : id, name });
        this.form.newMate = '';
      },
      mateClick(id) {
        // eslint-disable-next-line
        console.log(id);
        if (id === '99999') {
          // eslint-disable-next-line
          console.log(this.name);
          this.showModal = true;
        } else {
          this.form.mates = this.form.mates.filter(e => e.id !== id);
        }
      },
      queryMate(str, cb) {
        const mates = [{ id: 'A0003', name: 'jack', value: 'jack' }, { id: 'A0004', name: 'wang', value: 'wang' }];
        cb([{ id: '00000', value: 'create mate', name: str }, ...mates.filter(e => e.name.includes(str)).filter(e => this.form.mates.every(n => n.name !== e.name))]);
      },
      judge(str) {
        if (Number(str)) {
          this.form.money = Number(str);
        } else if (this.form.types.some(e => e === str)) {
          this.form.type = str;
        } else {
          this.form.title = str;
        }
      },
      createRecord() {
        const d = { cDate: this.getDate(this.form.date), ...this.form };
        // eslint-disable-next-line
        console.log(d);
        this.$store.dispatch('addRecord', d);
        this.$router.push('/list');
      },
      cancelCreate() {
        this.$router.go(-1);
      },
      getDate(date) {
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;
      },
    },
    mounted() {
      // eslint-disable-next-line
      console.log(this.str);
      this.judge(this.str);
      this.wWidth = window.innerWidth;
      window.onresize = () => {
        this.wWidth = window.innerWidth;
      };
      // this.windowWidth = window.innerWidth;
    },
    // beforeRouteUpdate(to, from, next) {
    //   // eslint-disable-next-line
    //   console.log('before', from);
    //   this.from = from.name === null ? '/' : from;
    //   next();
    // },
  };
</script>

<style lang="css" scoped>
  .create {

  }
  .wrapper{
    max-width: 600px;
  }
  .el-card{
    background-color: #ffffff;
  }
@media screen and (max-width:480px) {
  .el-button{
    width: 100%;
    margin-top: 8px;
    margin-left: 0;
  }
}
.el-select{
  width:100%;
}
  /*.el-form-item {
    text-align: left;
  }*/
  .el-autocomplete{
    width: 100%;
  }

  .modal{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 101;
    padding: 32px;
    box-sizing: border-box;
  }
</style>
