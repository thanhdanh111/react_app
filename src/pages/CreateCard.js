import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Form from '../Form/Form'
import { useParams } from 'react-router-dom'
import {RoomContext} from '../context'
import Footer from '../components/Footer'
export default function CreateCard({user , db}) {
    const getPath  =  useParams()
    const slug = getPath.slug;
    const {getRoom} = useContext(RoomContext)
    const room  = getRoom(slug)
    console.log(room);
    if(!room){
     return <h1>Loading</h1>
    }
    const { nameProcard } = room;
    console.log(nameProcard);
    return (
        <div>
            <Navbar />
            <Form  user={user} db={db} nameProcard={nameProcard} slug={slug} />
            <Footer />
        </div>
    )
}
