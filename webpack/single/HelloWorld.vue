<template>
  <div>
    <div>{{sum}}</div>
    <my-btn @inc="inc"></my-btn>
    <my-btn @inc="inc"></my-btn>
    <my-btn @inc="inc"></my-btn>
  </div>

  
  
</template>

<script>
import MyBtn from './MyBtn'
export default {
  name: 'HelloWorld',
  data () {
    return {
      sum:0
    }
  },
  methods:{
    inc(){
      this.sum++
    }

  },
  components:{MyBtn}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
