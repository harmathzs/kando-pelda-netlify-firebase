import { useState, useEffect } from 'react';
export default function MyFirebaseData(props) {
    const [firebaseData, setFirebaseData] = useState([]);

    useEffect(()=>{
        setFirebaseData([{test: 'data1'}, {test: 'data2'}, {test: 'data3'}]);
    }, [setFirebaseData]);

    return <div>
        <p>MyFirebaseData</p>
        <p>{JSON.stringify(firebaseData)}</p>
    </div>
}