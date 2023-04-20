<template>
    <a @click="onClick" :href="href">
        <slot></slot>
    </a>
</template>

<script>
    export default{
        props:{
            href:{
                type:String,
                required:true
            }
        },
        methods:{
            onClick(e){
                e.preventDefault()
                let path=this.href
                this.$root.currentRoute=path
                window.history.pushState(null,null,path)

            }
        }
    }
</script>

<style>

</style>
