<template>
  <div class="content-tab">
    <div class="content-tab-item" v-for="(content,index) in contents" :key="index">
        <div class="content-tab-title" :class="{'open':index===openTab}" @click="$emit('setTab',index)">{{content.title}}</div>
        <transition name="slide">
          <div class="content-tab-body" v-show="index===openTab" v-html="content.content"></div>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentTabs",
  props: ['contents','openTab'],
}
</script>

<style lang="less" scoped>
.content-tab {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
    @media screen and (max-width: 762px) {
      flex-flow: column wrap;
    }
  &-item {
    flex: 1 1 0
  }
  &-title {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #000000;
  }
  &-body {
    padding: 20px;
    background: #92c4e6;
    @media screen and (min-width: 762px) {
      display: none;
    }
  }
  & .open {
    background: #1386d3;
    color: #ffffff;
  }

  //transition
  .slide-enter-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  .slide-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .slide-enter-to, .slide-leave {
    max-height: 100px;
    overflow: hidden;
  }

  .slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
    padding: 0;
  }
}
</style>