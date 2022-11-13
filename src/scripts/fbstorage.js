import {
    ref,
    uploadBytesResumable,
    getDownloadURL 
} from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { spinnerOn } from "./spinner";

import {fbstorage,fsdb} from "./fb"

export async function uploadProfilePic(file,uid,context) {
    console.log(file.name);
    if (!file) {
        alert("Please choose a file first!")
    }
    var format = file.name.split('.')[1]
    const storageRef = ref(fbstorage,`${uid}/files/profilepic.${format}`)
    const uploadTask = uploadBytesResumable(storageRef, file);
    spinnerOn()
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
 
            // update progress
            console.log(percent)
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then(async(url) => {
                console.log(url);
                const userRef = doc(fsdb, "users", uid);
                await updateDoc(userRef, {
                  profilepic: url
                });
                localStorage['profilepic']=url
                context.$router.go()
                
            });
        }
    ); 
}