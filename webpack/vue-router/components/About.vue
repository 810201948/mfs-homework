<template>
    <div>
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <p>this is about page</p>
    </div>
</template>

<script>
    import VLink from './VLink'
    export default{
        components:{
            VLink
        }
    }
</script>

<style>

</style>