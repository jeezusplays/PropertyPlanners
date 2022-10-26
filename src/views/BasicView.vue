<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <Nav/>
    <RouterView/>
</template>

<script>
import Nav from "../components/Nav.vue"

export default{
    name:'NormalView',
    components:{
        Nav
    }
}


</script>