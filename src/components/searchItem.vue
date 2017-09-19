<template>
  <li class="item">
    <svg style="display:none" width="25px" height="25px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
        <title>add</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <symbol id="icons" viewBox="0 0 25 25">
        <g id="main" stroke="none" stroke-width="1" fill-rule="evenodd">
            <g id="Desktop-HD" transform="translate(-963.000000, -353.000000)">
                <g id="item" transform="translate(420.000000, 331.000000)">
                    <polygon id="add" points="543 38 543 31 552 31 552 22 559 22 559 31 568 31 568 38 559 38 559 47 552 47 552 38"></polygon>
                </g>
            </g>
        </g>
      </symbol>
    </svg>
    <div class="title">{{item.value}}</div>
    <div class="icon-wrapper">
      <svg height="20px" width="20px">
        <use xlink:href="#icons" class="icon"></use>
      </svg>
  </div>
  </li>
</template>

<script>
  export default {
    functional: true,
    name: 'searchItem',
    props: {
      item: Object,
    },
  };
</script>

<style lang="css" scoped>
  .item {
    height: 48px;
  }
  .title {
    float: left;
    height: 48px;
    line-height: 48px;
    font-size: 20px;
    font-weight: 500;
  }
  .icon-wrapper{
    float: right;
    margin-top: 14px;
  }
  use.icon{
    fill:#48576a;
  }
  .highlighted use.icon{
    fill:#ffffff;
  }
</style>
