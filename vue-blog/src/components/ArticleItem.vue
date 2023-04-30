<template>
  <div class="article-item">
    <h3>{{data.title}}</h3>
    <div class="desc">
        <span class="target">{{data.target}}</span>
        <span class="circle"></span>
        <span class="date">{{data.date}}</span>
        <span class="circle"></span>
        <span class="click-times">浏览 {{data.clickTimes}}</span>
    </div>
    <div class="content" v-if="showDetail">{{data.content}}</div>
    <div class="content" v-if="!showDetail">{{data.content|clip}}</div>
    <div v-if="!showDetail" class="view-article"><router-link to="/article/1">查看文章</router-link></div>
  </div>
</template>

<script>
export default {
    props:{
        showDetail:{
            type:Boolean,
            default:false,
        },
        data:{
            required:true,
            type:[Object,Array]
        },
        

    },
    name: 'article-item',
    data () {
        return {
        
        }
    }
}
</script>

<style scoped>
    .article-item h3{
        text-align:center;
    }
    .desc{
        text-align:center;
        display:flex;
        justify-content:center;
        align-items:center
    }
    .desc .circle{
        display:block;
        height:4px;
        width:4px;
        background-color:black;
        border-radius:50%;
        margin:0 5px;
    }
    .desc .target,.date,.click-times{
        color:grey;
        font-size:12px
    }
    .content{
        margin-top:20px;
        line-height:1.5;
    }
    .view-article{
        margin:20px;
        text-align:center;
    }
    .view-article a{
        padding:0 10px;
        text-decoration:none;
        color:#000;
        font-weight:600;
        border-left:1px solid black;
        border-right:1px solid black;
    }
</style>