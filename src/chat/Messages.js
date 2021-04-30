import React from 'react'
import { formatRelative } from 'date-fns';
import Image from '../images/logout/logout.jpg'
import './Message.css'
import img from '../images/danh/tien.jpg'
import {auth,db} from '../chat/firebase'
const Message = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoURL = '',
    uid 
}) => { 
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`message ${messageClass}`}>
        {
            photoURL?
            <img src={photoURL} />
            : <img src={img}/>
            }
        <p>{text}</p>
        </div>
    )
}

export default Message;