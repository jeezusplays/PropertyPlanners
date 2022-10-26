<template>
  <EmptyChat v-if="chats.length == 0"/>
  <div v-else>
    test
  </div>
</template>

<script>
import EmptyChat from "./EmptyChat.vue"


export default{
  name: "Chat",
  data(){
    return{
      chats:[]
    }
  },
  components:{
    EmptyChat
  }
}
</script>
