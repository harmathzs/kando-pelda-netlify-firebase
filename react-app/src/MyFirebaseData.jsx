import { useState, useEffect } from 'react';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function MyFirebaseData(props) {
    const [firebaseData, setFirebaseData] = useState([]);

    const firebaseConfig = {
        apiKey: "AIzaSyAAKhk-vdO1BtUxfVgV_wj1RJNOV_SStY4",
        authDomain: "my-first-firebase-20250825.firebaseapp.com",
        projectId: "my-first-firebase-20250825",
        storageBucket: "my-first-firebase-20250825.firebasestorage.app",
        messagingSenderId: "818879190215",
        appId: "1:818879190215:web:674e40feedc70a3b0b9ae2",
        measurementId: "G-YPC04SKQ85"
    };  
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    useEffect(()=>{
        //setFirebaseData([{test: 'data1'}, {test: 'data2'}, {test: 'data3'}]);

        async function fetchData() {
            const db = getFirestore(app);
            const docRef = doc(db, "user_credentials", "user_credential_01");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setFirebaseData(docSnap.data());
            } else {
                console.warn("Document not found!");
            }  
        }
        fetchData();
    }, []);

    return <div>
        <p>MyFirebaseData</p>
        <p>{JSON.stringify(firebaseData)}</p>
    </div>
}