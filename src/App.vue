<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-if="!$route.meta.isFooterHide" />
  </div>
</template>

<script>
import Header from './components/Header/index'
import Footer from './components/Footer/index'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
