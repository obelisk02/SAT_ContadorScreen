

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyCoQ7GygkFJWl4uOHTQOYmcWQwFrwopMuo",
    authDomain: "viaticos-4cc2c.firebaseapp.com",
    projectId: "viaticos-4cc2c",
    storageBucket: "viaticos-4cc2c.appspot.com",
    messagingSenderId: "287524196206",
    appId: "1:287524196206:web:fb4eac753e073f72babb7f"
  };


  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  const colRef = collection(db, "Turnos");

   //*********************************************** */
  // GET ALL
  let turnosArr = [];
  getDocs(colRef)
    .then((snapshot)=>{
        
        let marcaAuto = []

        snapshot.docs.forEach((doc) => {
            turnosArr.push({ ...doc.data(), id: doc.id})

        });
        console.log(turnosArr)
    })

    .catch(err => {
        console.log(err.message)
    })

export { app, db, collection, getDocs, Timestamp, addDoc };
export { query, orderBy, limit, where, onSnapshot };





