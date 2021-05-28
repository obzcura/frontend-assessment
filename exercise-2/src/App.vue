<template>
  <div id="app">
    <Banner/>
    <Content />
  </div>
</template>

<script>
import Banner from './components/Banner'
import Content from './components/Content';

export default {
  name: 'App',
  components: {
    Banner,
    Content
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
