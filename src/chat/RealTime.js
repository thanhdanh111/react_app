
import firebase from './firebase'
import React, { useEffect, useState, useRef } from 'react';
import Channel from './Channel'
import {auth , db} from './firebase'

export default function RealTime({messages}) {
    const [user , setUser] = useState(() => auth.currentUser)
    console.log("user",user);
    const [initializing , setInitializing] = useState(true)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                setUser(user);
            } else{
                setUser(null);
            }
            if(initializing){
                setInitializing(false)
            }
        })
        return unsubscribe;
    },[]);
    return (
        <div className="realtime" style={{width:"100%", height:"120vh",background:""}}>
            {user ? (
                <>
                <Channel user = {user} db = {db} name={messages}/>
                </>
            ) : (
            null
            )}
        </div>
    )
}
