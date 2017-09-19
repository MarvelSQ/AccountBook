<template>
  <div class="records">
    <div class="wrapper">
    <div class="filter">
      <el-radio-group v-model="filter.type">
        <el-radio-button v-for="type in filter.types" :key="type.key" :label="type"></el-radio-button>
      </el-radio-group>
      <el-input placeholder="filter..."></el-input>
    </div>
    <ul>
      <li v-for="record in records" :key="record.id">
        <div class="maintain">
        <span class="money">- {{record.money}}</span>
        <span class="info">
          <p class="title"><span>{{record.title}}</span>{{record.description==''?'there is nothing':record.description}}</p>
          <p class="date">{{record.cDate}}</p>
        </span>
      </div>
        <div class="side">
          <div><i class="icon"></i><span class="names" v-for="mate in record.mates" :key="mate.id">{{mate.name}}</span></div>
          <div><i class="icon"></i>{{record.type}}</div>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>
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
    max-width: 150px;
    width: 20%
  }
  ul{
    list-style: none;
  }
  li{
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #efefef;
    padding: 10px 10px;
    text-align: left;
    overflow: hidden;
    color: #888888;
    font-size: 14px;
  }
  .maintain{
    display: flex;
  }
  .maintain>.money{
    width: 120px;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    font-weight: 600;
    white-space: nowrap;
    color: #212121;
    flex-shrink: 0;
  }
  .maintain>.info{
    flex-grow: 1;
    overflow: hidden;
    position: relative;
  }

  .info>p:last-child{
    position: absolute;
    bottom: 0;
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
    padding-right: 10px;
  }
  .info>.title{
    color:#555555;
  }

  .side>div{
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    line-height: 16px;
  }

  .icon{
    display: inline-block;
    font-size: 16px;
    width: 16px;
    height: 16px;
    background-color: #2367b5;
    border-radius: 4px;
    margin-right: 10px;
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
    padding-right: 10px;
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
      float: right;
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
    padding-right: 8px;
  }
  .names:last-child{
    padding-right: 0;
  }
  /*div>.names:first-child::before{
    content: none;
    padding-right: 0;
  }
  div>.names::before{
    content:',';
    padding-right: 8px;
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
          types: ['enjoy', 'work', 'sport', 'movie', 'food'],
        },
      };
    },
    computed: {
      ...mapGetters({
        records: 'getRecords',
      }),
    },
  };
</script>
