<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <Nav :newPage="newPage" @changenewpage="changePage" />
    <RouterView @goSignupFromLogin="goSignupFromLogin" @goLoginFromSignup="goLoginFromSignup"/>
</template>

<script>
import Nav from "../components/Nav.vue"

export default{
    name:'NormalView',
    components:{
        Nav
    },
    data(){
        return{
            newPage:'landing'
        }
    },
    methods:{
        goSignupFromLogin(){
            this.newPage='signup'
        },
        goLoginFromSignup(){
            this.newPage='login'
        },
        changePage(data){
            this.newPage=data
        }

    }
}


</script>