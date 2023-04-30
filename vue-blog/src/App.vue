<template>
  <div id="app" class="container">
    <main-nav>
    </main-nav>
    <router-view/>
  </div>
</template>

<script>
import MainNav from './components/MainNav'
export default {
  components:{MainNav},
  name: 'App'
}
</script>

<style>
  @import '../src/assets/css/base.css';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  ol,ul,body{
    margin:0;
    padding:0;
  }
  ol,ul{
    list-style:none;
  }
  .container{
    width:80%;
    margin:0 auto;
  }
</style>
