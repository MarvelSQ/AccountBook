<template>
  <div class="records">
    <div class="wrapper">
    <div class="filter">
      <el-radio-group v-if="dom.width>530" v-model="filter.type">
        <el-radio-button v-for="type in filter.types" :key="type.id" :label="type"></el-radio-button>
      </el-radio-group>
      <el-select v-else v-model="filter.type" placeholder="type">
        <el-option v-for="type in filter.types" :key="type.id" :value="type"></el-option>
      </el-select>
      <el-input placeholder="filter..." v-model="filter.keyWord"></el-input>
    </div>
    <ul class="list">
      <li v-for="record in records" :key="record.id" @click="detailClick(record)">
        <div class="maintain">
        <div class="money">- {{record.money}}</div>
        <div class="info">
          <p class="title"><span>{{record.title}}</span>{{record.description==''?'there is nothing':record.description}}</p>
          <p class="date">{{record.cDate}}</p>
        </div>
      </div>
        <div class="side">
          <div><i class="icon"></i><span class="names" v-for="mate in record.mates" :key="mate.id">{{mate.name}}</span></div>
          <div><i class="icon"></i>{{record.type}}</div>
        </div>
      </li>
    </ul>
    <div class="test">
      bfc
    <div class="n bfc">
      <div class="left">
      </div>
      <div class="window">
        <div class="content">
          </div>
      </div>
    </div>
    <div class="c"></div>
    <div class="n bfc">
      <div class="right">
      </div>
      <div class="window">
        <div class="content">
          </div>
      </div>
    </div>
    <div class="c"></div>
    <div class="n bfc">
      <div class="left">
      </div>
      <div class="right">
      </div>
      <div class="window">
        <div class="content">
          </div>
      </div>
    </div>
    <div class="c"></div>
    bfc border
    <div class="n bfc border">
      <div class="left">
      </div>
      <div class="window">
        <div class="content">
          </div>
      </div>
    </div>
    <div class="c"></div>
    <div class="n bfc border">
      <div class="right">
      </div>
      <div class="window">
        <div class="content">
          </div>
      </div>
    </div>
    <div class="c"></div>
    <div class="n bfc border">
      <div class="left">
      </div>
      <div class="right">
      </div>
      <div class="window">
        <div class="content">
          </div>
      </div>
    </div>
    <div class="c"></div>
    flex
    <div class="n flex">
      <div class="left">
      </div>
      <div class="window">
        <div class="content">
      </div>
      </div>
    </div>
    <div class="c"></div>
    <div class="n flex">
      <div class="window">
        <div class="content">
      </div>
      </div>
        <div class="right">
        </div>
    </div>
    <div class="c"></div>
    flex border
    <div class="n flex border">
      <div class="left">
      </div>
      <div class="window">
        <div class="content">
      </div>
      </div>
    </div>
    <div class="c"></div>
    <div class="n flex border">
      <div class="window">
        <div class="content">
      </div>
      </div>
      <div class="right">
      </div>
    </div>
  </div>
  </div>
  </div>
</template>
<style>
.test>.n{
  height: 100px;
  margin-top: 20px;
  background-color: #434343;
}
.test>.c{
  height: 60px;
  clear:both;
}
.test>.border, .test>.border div{
  box-sizing: border-box;
}
.test .content{
  background: #22ffff;
  height: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.test .left,.test .window,.test .right{
  margin: 10px;
  padding: 10px;
  border: 10px solid #ddd;

  position: relative;
}

.test .left{
  background-color: #888888;
  height: 100%;
}

.test .right{
  background-color: #353535;
  height: 100%;
}

.test .window{
  background-color: #efefef;
  height: 100%;
}

.bfc .left{
  float: left;
  width: 100px;
}

.bfc .right{
  float: right;
  width: 100px;
}

.bfc .window{
  overflow: hidden;
}

.flex {
  display: flex;
  flex-direction: row;
}

.flex .left{
  width: 100px;
}

.flex .right{
  width: 100px;
}

.flex .window{
  flex-grow: 1;
}
</style>
<style scoped>
  .records {

  }
  .wrapper{
    max-width: 600px;
  }
  .filter{
    padding:10px 0 15px 0;
    text-align: left;
    overflow: hidden;
  }
  .filter .el-radio-group{
    float: left;
    width: 66.7%;
  }
  .filter .el-input{
    float: right;
    min-width: 100px;
    width: 20%
  }
  .list ul{
    list-style: none;
  }
  .list li{
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #efefef;
    padding: 10px 10px;
    text-align: left;
    overflow: hidden;
    color: #888888;
    font-size: 14px;
  }
  .list li:hover{
    background-color: #C4E2FF;
  }
  .maintain{
    /*display: flex;*/
  }
  .maintain>.money{
    width: 120px;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    font-weight: 600;
    white-space: nowrap;
    color: #212121;
    /*flex-shrink: 0;*/
    float: left;
  }
  .maintain>.info{
    /*flex-grow: 1;*/
    overflow: hidden;
    position: relative;
    height: 60px;
  }

  .info>p:last-child{
    position: absolute;
    bottom: 0;
    left: 0;
  }


  .info>p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .info>.title>span{
    font-size: 18px;
    color: #212121;
    font-weight: 400;
    padding-window: 10px;
  }
  .info>.title{
    color:#555555;
  }

  .side>div{
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    line-height: 16px;
    white-space: nowrap;
  }

  .icon{
    display: inline-block;
    font-size: 16px;
    width: 16px;
    height: 16px;
    background-color: #2367b5;
    border-radius: 4px;
    margin-window: 10px;
    vertical-align: middle;
  }
  @media screen and (min-width:500px) {
    .maintain{
      float: left;
      width: 70%;
    }
    .side{
      float: left;
      width: 30%;
      height: 60px;
      position: relative;
    }
    .side>div:last-child{
      position: absolute;
      bottom: 0;
    }
  }

  @media screen and (max-width:500px) {
    .side>div{
      margin-top: 10px;
      width: 50%;
      float: left;
      text-align: center;
    }
  }
  /*.maintain{
    height: 60px;
    overflow: hidden;
  }
  .maintain>.money{
    float: left;
    width: 120px;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    font-weight: 600;
  }
  .maintain>.info{
    float: left;
    height: 60px;
    vertical-align: top;
    position: relative;
  }
  .info>p{
    color:#555555;
    font-size: 14px;
  }
  .info>p>span{
    color: #212121;
    font-size: 18px;
    padding-window: 10px;
  }
  .info>p:last-child{
    position: absolute;
    bottom: 0;
  }
  @media screen and (min-width:500px) {
    li{
      height: 60px;
    }
    .side{
      float: window;
      height: 60px;
    }
    .side>div:last-child{
      position: absolute;
      bottom: 0;
    }
  }
  @media screen and (max-width:500px) {
    li{
      flex-direction: column;
    }
    .side>div{
      margin-top: 10px;
      display: inline-block;
      width: 50%;
      text-align: center;
      float: left;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .side{
    color: #888888;
    position: relative;
  }*/
  .names{
    cursor: pointer;
  }
  .names{
    padding-window: 8px;
  }
  .names:last-child{
    padding-window: 0;
  }
  /*div>.names:first-child::before{
    content: none;
    padding-window: 0;
  }
  div>.names::before{
    content:',';
    padding-window: 8px;
  }*/

</style>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'records',
    data() {
      return {
        filter: {
          type: '',
          keyWord: '',
          types: ['enjoy', 'work', 'sport', 'movie', 'food'],
        },
        width: window.innerWidth,
      };
    },
    computed: {
      ...mapGetters({
        records: 'getRecords',
      }),
    },
    methods: {
      detailClick(record) {
        this.$notify({
          title: record.title,
          message: `${record.money}
          ${record.description ? record.description : 'there is nothing'}
          ${record.mates.map(e => e.name)}`,
          type: 'info',
          offset: 100,
        });
      },
    },
  };
</script>
