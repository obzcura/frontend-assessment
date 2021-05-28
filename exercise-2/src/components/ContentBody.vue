<template>
  <div class="content-body-container">
    <transition-group name="fade">
      <div class="content-body-item" v-html="content.content" v-for="(content,index) in contents" :key="'item'+index" v-show="index===openTab">
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "ContentBody",
  props: ['contents','openTab']
}
</script>

<style lang="less" scoped>
  .content-body {
    &-container {
      position: relative;
    }
    &-item {
      position: absolute;
      top: 0;
      left: 0;
      text-align: justify;
      padding: 50px;
      @media screen and (max-width: 762px) {
        display: none;
      }
    }
  }

  //transition
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>