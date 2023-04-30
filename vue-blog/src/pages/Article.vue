<template>
  <div class="hello main">
    <div class="col md-8 list">
      <article-item :data="article" :show-detail="true"></article-item>
    </div>
    
    <div class="col md-4 xs-10">
      <latest-article :data="LatestArticles"></latest-article>
      <archive :data="archives"></archive>
      <target :data="targets"></target>
    </div>
  </div>
</template>

<script>
import LatestArticle from '../components/LatestArticle'
import Archive from '../components/Archive'
import Target from '../components/Target'
import ArticleItem from '../components/ArticleItem'
export default {
  components:{
    LatestArticle,
    Archive,
    Target,
    ArticleItem
  },
  props:{
        data:{
          type:Array,
          required:true
        }

    },
  name: 'article',
  data () {
    return {
      article:
        {
          id:1,
          title:"article-name1",
          target:"前端",
          date:"2023-6-17",
          clickTimes:"2222",
          content:"单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。可以基于 tag 来快速筛选感兴趣的文章，文章也可以依照 而且人工设置难免不规范和不完全。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。可以基于 tag 来快速筛选感兴趣的文章，文章也可以依照 而且人工设置难免不规范和不完全。",
        },
      
      LatestArticles:[
        {
          id:1,
          title:"css最新特性实现的三大黑科技"  ,        
        },
        {
          id:2,
          title:"js最新特性实现的三大黑科技"  ,        
        },
        {
          id:3,
          title:"node最新特性实现的三大黑科技"  ,        
        },
      ],
      archives:[
        {
          year:2023,
          month:1,
          articleNum:3
        },
        {
          year:2023,
          month:2,
          articleNum:3
        },
        {
          year:2023,
          month:5,
          articleNum:3
        }
      ],
      targets:[
        {
          id:1,
          name:"前端"
        },
        {
          id:2,
          name:"css"
        },
        {
          id:3,
          name:"爬虫"
        }
      ]
      
    }
  }
}
</script>

<style scoped>
  .main{
    margin-top:20px;
  }
  .list{
    padding:0 20px;
  }
</style>
