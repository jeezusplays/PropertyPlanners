<template>
  <EmptyChat v-if="chats.length == 0 && isSeeker"/>
  <EmptyChatAgent v-if="chats.length == 0 && isAgent"/>

  <div v-if="chats.length > 0">
    test
  </div>
</template>

<script>
import EmptyChat from "./EmptyChat.vue"
import EmptyChatAgent from "./EmptyChatAgent.vue"


export default{
  name: "Chat",
  data(){
    return{
      chats:[],
      isAgent : localStorage['type']=='agent',
      isSeeker: localStorage['type']=='seeker',
    }
  },
  components:{
    EmptyChat,
    EmptyChatAgent
  }
}
</script>
