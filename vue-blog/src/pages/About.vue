<template>
  <div class="about">
        <div class="title">
            About Me
        </div>
        <div class="logo">
          <img src="../assets/logo.png" alt="">
        </div>
    <div class="content">
      <p>Responsive web design offers us a way forward, finally allowing us to design for the ebb and flow of things. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.</p>
      <p>Responsive web design offers us a way forward, finally allowing us to design for the ebb and flow of things. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.</p>
    </div>
  </div>
  
    

</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.title{
  text-align: center;
  font-size: 36px;
  font-weight: 700;
}
.logo{
  margin-top: 30px;
  text-align: center;
}
.content{
  font-size: 20px;
  line-height: 150%;
  margin: 30px 0 100px 0;
}
</style>
