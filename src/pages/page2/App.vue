<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <br/>
    page2asdfasdfasd
    Vue Element-ui dark <el-button>Button2</el-button>
    <HelloWorld/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
    this.$api.GoodsApi.getList()
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
  margin-top: 60px;
}
</style>
