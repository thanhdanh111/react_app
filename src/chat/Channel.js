import React, { useEffect, useState, useRef } from 'react';
import PropTypes  from 'prop-types'
import firebase from 'firebase/app';
import Message from './Messages'
import './Chanel.css'
import ScrollableFeed from 'react-scrollable-feed'
const Channel = ({ user = null,db = null,name}) => {
  const dummy = useRef();
    const [messages, setMessages] = useState([]);    
    console.log("a",messages.length);
    const [newMessage, setNewMessage] = useState([]); 
    const [submitKey, setSubmitKey] = useState(10); 
    const { uid, displayName, photoURL } = user;
   
    useEffect(() =>{
        if(db){
            const unsubscribe = db.collection(name).orderBy('createdAt').limit(100).onSnapshot(
                querySnapshot => {
                    const data = querySnapshot.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                    setMessages(data)
                })
                return unsubscribe
        }
    },[])
    const handleOnChange = e =>{
      setNewMessage(e.target.value)
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        if(db){
          db.collection(name).add({
            text: newMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            displayName,
            photoURL
          })
          setNewMessage('');
        }
        
    }
    return (
      <div className = "channel">
        <header className="chanel-header">
          <h1 className="header-h1">RoomChat</h1>
        </header>
      <section className="channel-section">
      <main className="channel-main">
            <ScrollableFeed >
                {messages.map(message => (
                  <li style={{listStyle:"none"}} key={message.id}><Message {...message}/></li>
                ))}
              </ScrollableFeed>   
                 
      </main>
              <form className ="form-chat-submit" onSubmit={handleOnSubmit} >
                <input
                  type="text"
                  value={newMessage}
                  onChange={handleOnChange}
                  placeholder="Type your message here..."
                />
                <button
                  type="submit"
                  disabled={!newMessage}
                >
                  Send
                </button>
              </form>
        </section>
      </div>
    );

};
export default Channel