
import react , {useState, useEffect} from 'react'
import {auth,db} from './chat/firebase'
import LoginDemo from './Logindemo/LoginDemo';
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import "./App.css";
import Navbar from "./components/Navbar";
import CreateCard from './pages/CreateCard'
import RoomAccept from './pages/RoomAccept'
import firebase from './chat/firebase'
function App() {
    const [user , setUser] = useState(auth)
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
  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <>
   {
     user ? (
       <>
        <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/rooms/:slug/create-card" children={<CreateCard user={user} db={db} />} />
        <Route exact path="/rooms/:slug/:nameProcard" children={<RoomAccept user={user} db={db} />} />
        <Route component={Home} />
      </Switch>
    </>
       </>
     )
     :
     <Switch>
         <Route exact path="/" component={LoginDemo} />
         <Route  component={LoginDemo} />
     </Switch>
   }
    </>
  );
}

export default App;
