<template>
  <div class="archive">
    <h2>文章归档</h2>
    <ul>
        <li v-for="archive in data"><router-link :to="`/archive/${archive.year}/${archive.month}`">{{archive.year}}年{{archive.month}}月({{archive.articleNum}})</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    data:{
        type:Array,
        required:true
    }
  },
  name: 'archive',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
    .archive h2{
        font-weight:500;
        font-size:18px;
    }
    .archive li{
        font-size:14px;
        line-height:28px;
    }
    a{
        text-decoration:none;
        color:#000;
    }
</style>
