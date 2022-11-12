import { rtdb } from "./fb";
import { ref, child, get } from "firebase/database";

message = (content, date, senderID, timestamp, username) => {
    return {
      content: content,
      date: date,
      senderID: senderID,
      timestamp: timestamp,
      username: username
    };
  };

export class ChatHelper {
  constructor(uid) {
    this.uid = uid;
    this.dbRef = ref(rtdb);
    this.chats = []
  }



  async getAllChats() {
    try {
        await get(child(this.dbRef, `${this.uid}/chats`)).then((ss) => {
            if (ss.exists()) {
                this.chats = ss.val();
            } else {
              console.log("no data avail");
            }
          });
    } catch (error) {
        console.log(error);
    }
    return this.chats
  }

  async getMessages(uid2) {
    var route = `${this.uid}/chats/${uid2}`;
    var chatID;
    try {
      await get(child(this.dbRef, route)).then((ss) => {
        if (ss.exists()) {
          chatID = ss.val();
        } else {
          console.log("no data avail");
        }
      });

      await get(child(this.dbRef, `chats/${chatID}`)).then((ss) => {
        if (ss.exists()) {
          chatID = ss.val();
        } else {
          console.log("no data avail");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
