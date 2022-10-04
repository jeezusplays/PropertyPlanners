import { fsdb } from "./fbapp";
import { collection, query, where, getDocs } from "firebase/firestore";

async function test() {
  const q = query(collection(fsdb, "agents"), where("age", ">=", 23));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

export {test};
