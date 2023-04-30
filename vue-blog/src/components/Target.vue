<template>
  <div class="target">
    <h2>标签</h2>
    <ul>
        <li v-for="target in data">
          <router-link :to="`/target/${target.id}`">{{target.name}}</router-link>
        </li>
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
  name: 'target',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
    .target h2{
        font-weight:500;
        font-size:18px;
    }
    .target ul{
      display:flex;
      flex-wrap:wrap;
    }
    .target li{
        margin:4px;
        font-size:14px;
        border:1px solid green;
        padding:2px
    }
    a{
        text-decoration:none;
        color:#000;
    }
</style>