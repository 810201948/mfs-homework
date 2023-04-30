<template>
  <div class="latest-article">
    <h2>近期文章</h2>
    <ul>
        <li v-for="article in data"><router-link :to="'/article/'+article.id">{{article.title}}</router-link></li>
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
    // name: 'latest-article',
    data () {
        return {
        
        }
    }
}
</script>

<style scoped>
    .latest-article h2{
        font-weight:500;
        font-size:18px;
    }
    .latest-article li{
        font-size:14px;
        line-height:28px;
    }
    a{
        text-decoration:none;
        color:#000;
    }
</style>