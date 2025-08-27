import { useState, useEffect } from 'react';

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

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
    //const analytics = getAnalytics(app);

    useEffect(()=>{
        async function fetchData() {
            const db = getFirestore(app);
            const docRef1 = doc(db, "user_credentials", "user_credential_01");
            const docSnap1 = await getDoc(docRef1);
            const docRef2 = doc(db, "user_credentials", "user_credential_02");
            const docSnap2 = await getDoc(docRef2);    
            
            /*
                Or, get all documents of a collection:
                
                const colRef = collection(db, "user_credentials");
                const snapshot = await getDocs(colRef);
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            */

            if (docSnap1.exists()) {
                const data = [docSnap1.data(), docSnap2.data()];
                console.log("Document data:", data);
                setFirebaseData(data);
            } else {
                console.warn("Document not found!");
            }  
        }
        fetchData();
    }, []);

    return <div>
        <p>MyFirebaseData</p>
        {firebaseData.map(elem => <p key={elem.id}>
            <strong> id:</strong> {elem.id}; 
            <strong> username:</strong> {elem.username}
        </p>)}
    </div>
}