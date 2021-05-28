<template>
    <div class="container">
      <ContentTabs :contents="data" :openTab="openContent" @setTab="setContent"/>
      <ContentBody :contents="data" :openTab="openContent"/>
    </div>
</template>

<script>
import ContentTabs from "./ContentTabs";
import ContentBody from "./ContentBody";

export default {
name: "Content",
  components: {
    ContentTabs,
    ContentBody
  },
  data() {
    return {
      data: "",
      openContent: 0
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.axios.get("data.json")
        .then(resp=> {
          this.data = resp.data;
        })
        .catch(e=> {
          alert(e);
        })
    },
    setContent(n) {
      this.openContent = this.openContent===n?"":n;
    }
  }
}
</script>

<style lang="less" scoped>

</style>