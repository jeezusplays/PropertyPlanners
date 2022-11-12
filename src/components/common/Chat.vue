<template>
  <EmptyChat v-if="rooms.length == 0" />
  <div v-else>

    <vue-advanced-chat height="calc(100vh - 20px)" 
    :current-user-id="currentUserId" 
    :rooms="JSON.stringify(rooms)" 
    :rooms-loaded="true" 
    :messages="JSON.stringify(messages)" 
    :messages-loaded="messagesLoaded"
    :room-actions="JSON.stringify(roomActions)" 
    @send-message="sendMessage($event.detail[0])"
    @fetch-messages="fetchMessages($event.detail[0])" />

  </div>
</template>

<script>
import EmptyChat from "./EmptyChat.vue"
import { register } from 'vue-advanced-chat'
import { rtdb } from '../../scripts/fb'
import { ref, onValue, get, child, } from 'firebase/database'


register()
export default {
  name: "Chat",
  data() {
    return {
      chats: {},
      currentUserId: 'WILo7EOJrtPRMXAHAZQtnyF8onH3',
      rooms: [
        {
          roomId: '1',
          roomName: 'Room 1',
          avatar: 'assets/imgs/people.png',
          unreadCount: 4,
          index: 3,
          lastMessage: {
            _id: 'xyz',
            content: 'Last message received',
            senderId: '1234',
            username: 'John Doe',
            timestamp: '10:20',
            saved: true,
            distributed: false,
            seen: false,
            new: true
          },
          users: [
            {
              _id: 'WILo7EOJrtPRMXAHAZQtnyF8onH3',
              username: 'John Doe',
              avatar: 'assets/imgs/doe.png',
              status: {
                state: 'online',
                lastChanged: 'today, 14:30'
              }
            },
            {
              _id: 'beqVUSicdWRuab6mMxUD5NeGHqG2',
              username: 'John Doe',
              avatar: 'assets/imgs/doe.png',
              status: {
                state: 'online',
                lastChanged: 'today, 14:30'
              }
            },
          ],
          typingUsers: [4321]
        }
      ],
      messages: [],
      messagesLoaded: false,
    }
  },
  components: {
    EmptyChat
  },
  methods: {
    fetchMessages({ room, options = {} }) {
      console.log(room);
      console.log(options);
      this.messagesLoaded = false
      if (options.reset) {
        setTimeout(() => {

        })

      } else {
        setTimeout(() => {

          this.messagesLoaded = true
        })
      }

    },

    addMessages(reset) {
      const messages = []
      console.log(reset);
      // for (let i = 0; i < 30; i++) {
      // messages.push({
      // _id: reset ? i : this.messages.length + i,
      // content: `${reset ? '' : 'paginated'} message ${i + 1}`,
      // senderId: '4321',
      // username: 'John Doe',
      // date: '13 November',
      // timestamp: '10:20'
      // })
      // }

      return messages
    },

    sendMessage(message) {
      console.log(message);
      var send = [
        ...this.messages,
        {
          _id: this.messages.length,
          content: message.content,
          senderId: this.currentUserId,
          timestamp: new Date().toString().substring(16, 21),
          date: new Date().toDateString()
        }
      ]
      this.updateDB(send)
    },

    addNewMessage() {
      setTimeout(() => {
        this.messages = [
          ...this.messages,
          {
            _id: this.messages.length,
            content: 'NEW MESSAGE',
            senderId: '1234',
            timestamp: new Date().toString().substring(16, 21),
            date: new Date().toDateString()
          }
        ]
      }, 2000)
    },
    async updateDB() {
      // var updates = {}
      console.log(this.chats);
      console.log(this.currentUserId);
      console.log(this.chats[this.currentUserId]);
      // updates['chats/'+this.chats[this.currentUserId]+'/messages'] = postdata
      // var r = await update(ref(rtdb), updates)
      // console.log(r);
    }
  },
  mounted() {

    var route = `${localStorage['uid']}/chats`
    var dbref = ref(rtdb)
    console.log(route);
    get(child(dbref, route)).then((ss) => {
      console.log(ss);
      console.log(ss.val());
      if (ss.exists()) {
        this.chats = ss.val()
        for (const uid in this.chats) {
          if (Object.hasOwnProperty.call(this.chats, uid)) {
            const chatID = this.chats[uid];
            const chatRoute = `chats/${chatID}`
            onValue(ref(rtdb, chatRoute), (chat) => {
              var data = chat.val()
              setTimeout(() => {
                this.messages = data.messages
              })
                console.log(this.messages);
            })
          }
        }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });


  }
}
</script>

