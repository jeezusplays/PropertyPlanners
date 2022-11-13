import { rtdb, fsdb } from "./fb";
import {
  ref,
  get,
  child,
  push,
  update,
  runTransaction,
  onValue
} from "firebase/database";
import { doc, getDoc } from "firebase/firestore";

export async function CreateChat(seekerUID, agentUID) {
  var seekerData = {};
  var agentData = {};

  //get from user
  const frmcRef = doc(fsdb, "users", seekerUID);
  const frmSnap = await getDoc(frmcRef);

  if (frmSnap.exists()) {
    var data = frmSnap.data();
    seekerData = data;
  }

  //get to user
  const tocRef = doc(fsdb, "users", agentUID);
  const toSnap = await getDoc(tocRef);

  if (toSnap.exists()) {
    data = toSnap.data();
    agentData = data;
  }

  //create chat
  const newChatKey = push(child(ref(rtdb), "chats")).key;
  const seekerRef = ref(rtdb, `${seekerUID}/chats`);
  runTransaction(seekerRef, (chatIDs) => {
    if (chatIDs) {
      chatIDs[agentUID] = newChatKey;
      return chatIDs;
    } else {
      var obj = {};
      obj[agentUID] = newChatKey;
      return obj;
    }
  });
  const agentRef = ref(rtdb, `${agentUID}/chats`);
  runTransaction(agentRef, (chatIDs) => {
    if (chatIDs) {
      chatIDs[seekerUID] = newChatKey;
      return chatIDs;
    } else {
      var obj = {};
      obj[seekerUID] = newChatKey;
      return obj;
    }
  });

  var users_obj = {};
  users_obj[seekerUID] = {
    avatar: seekerData.profilepic,
    username: seekerData.name,
  };
  users_obj[agentUID] = {
    avatar: agentData.profilepic,
    username: agentData.name,
  };
  var postData = {
    messages: [],
    users: users_obj,
  };

  const updates = {};
  updates["chats/" + newChatKey] = postData;

  await update(ref(rtdb), updates);

  return;
}

export async function GetAllChat(uid) {
  const dbRef = ref(rtdb);
  let chatIDs;
  await get(child(dbRef, `${uid}/chats`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        chatIDs = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  let promises = [];
  let chatObjs = {};

  for (const otherUID in chatIDs) {
    if (Object.hasOwnProperty.call(chatIDs, otherUID)) {
      const chatID = chatIDs[otherUID];
      promises.push(get(child(dbRef, `chats/${chatID}`)));
    }
  }

  await Promise.all(promises)
    .then((snapshots) => {
      snapshots.forEach((snapshot) => {
        if (snapshot.exists()) {
        //   console.log(_);
          chatObjs[snapshot.key] = snapshot.val();

        } else {
          console.log("No data available");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });

  return chatObjs;
}

export async function updateMessage(chatID,newMessage){
    let allMessages
    const chatRef = ref(rtdb, `chats/${chatID}/messages`);
    await runTransaction(chatRef, (messages) => {
      if (messages) {
        messages.push(newMessage);
        allMessages=messages
        return messages;
      } else {
        allMessages = [newMessage]
        return [newMessage];
      }
    })
    return allMessages;
}

export function subscribeChat(chatID='',func){
    const starCountRef = ref(rtdb, `chats/${chatID}/messages`)
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if(data) func(data)
        else func([])
      });
}


