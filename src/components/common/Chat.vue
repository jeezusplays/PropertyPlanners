<template>
  <EmptyChat v-if="rooms.length == 0" />
  <div v-else>
    <vue-advanced-chat
      height="calc(100vh - 70px)"
      :current-user-id="currentUserId"
      :rooms="JSON.stringify(rooms)"
      :rooms-loaded="true"
      :messages="JSON.stringify(messages)"
      :messages-loaded="messagesLoaded"
      :room-actions="JSON.stringify(roomActions)"
      @room-action-handler="userHandler($event.detail[0])"
      @send-message="sendMessage($event.detail[0])"
      @fetch-messages="fetchMessages($event.detail[0])"
    />
  </div>
</template>

<script>
import EmptyChat from "./EmptyChat.vue";
import { register } from "vue-advanced-chat";
import { GetAllChat, updateMessage, subscribeChat } from "../../scripts/chat";

register();
export default {
  name: "Chat",
  data() {
    return {
      chats: {},
      currentUserId: localStorage['uid'],
      rooms: [
      ],
      messages: [],
      messagesLoaded: false,
      rooms_obj: {},
      roomActions: [{ name: "viewUser", title: "View User" }],
    };
  },
  components: {
    EmptyChat,
  },
  methods: {
    fetchMessages({ room, options = {} }) {
      console.log("fetchMessages", room, options);
      this.messagesLoaded = false;

      if (options.reset) {
        setTimeout(() => {
          subscribeChat(room.chatID, this.updateMessages);
          this.messagesLoaded = true;
        });
      } else {
        setTimeout(() => {
          subscribeChat(room.chatID, this.updateMessages);
          this.messagesLoaded = true;
        });
      }
    },
    userHandler(event) {
      console.log('userHandler',event);
      var uid = event.roomId
      if(localStorage['type'] == 'seeker') this.$router.push({path: `search/viewagent/${uid}`})
      else this.$router.push({path:`viewseeker/${uid}`})
      // switch (action.name) {
        // case "archiveRoom":
        // call a method to archive the room
      // }
    },
    updateMessages(val) {
      console.log(val);
      this.messages = val;
    },

    addMessages(reset) {
      const messages = [];
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

      return messages;
    },

    async sendMessage(message) {
      var roomId = message.roomId;
      var room = this.rooms_obj[roomId];
      var chatID = room["chatID"];
      console.log(chatID);
      var newMessage = {
        _id: this.messages.length,
        content: message.content,
        senderId: localStorage['uid'],
        timestamp: new Date().toString().substring(16, 21),
        date: new Date().toDateString(),
      };
      var allMessages = await updateMessage(chatID, newMessage);
      console.log(allMessages);
    },

    addNewMessage() {
      setTimeout(() => {
        this.messages = [
          ...this.messages,
          {
            _id: this.messages.length,
            content: "NEW MESSAGE",
            senderId: "1234",
            timestamp: new Date().toString().substring(16, 21),
            date: new Date().toDateString(),
          },
        ];
      }, 2000);
    },
    createRooms() {
      var rooms = [];
      var rooms_obj = {};
      for (const chatID in this.chats) {
        if (Object.hasOwnProperty.call(this.chats, chatID)) {
          const chat = this.chats[chatID];
          var usersList = [];
          var messages = chat["messages"];
          var users = chat["users"];

          if (messages) {
            console.log(messages);
          } else {
            messages = [];
          }

          for (const user in users) {
            if (Object.hasOwnProperty.call(users, user)) {
              const profile = users[user];
              let avatar = profile["avatar"];
              let name = profile["username"];

              let user_obj = {};
              user_obj["_id"] = user;
              user_obj["username"] = name;
              user_obj["avatar"] = avatar;
              usersList.push(user_obj);

              if (localStorage["uid"] != user) {
                var room = {};
                room["roomId"] = user;
                room["roomName"] = name;
                room["avatar"] = avatar;
                room["messages"] = messages;
                room["users"] = usersList;
                room["chatID"] = chatID;
                rooms.push(room);
                rooms_obj[user] = room;
              }
            }
          }
          console.log(rooms_obj);
          console.log(rooms);
          this.rooms_obj = rooms_obj;
          this.rooms = rooms;
        }
      }
    },
  },
  async mounted() {
    this.chats = await GetAllChat(localStorage["uid"]);
    console.log(this.chats);
    this.createRooms();
  },
};
</script>
