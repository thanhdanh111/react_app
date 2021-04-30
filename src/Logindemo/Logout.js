import React from 'react'
import styled from 'styled-components'
import Image from '../images/logout/logout.jpg'
import './Logout.css'
const Loguot = ({ 
    photoURL = '',
}) => { 
    return (
        <>
        <section class="container">
            <button data-hover="Log out"><div>{photoURL ? (
                    <img className="logout-btn" src={photoURL} alt="Avatar" />
                ) : <img className="logout-btn" src={Image}  alt="Avatar" />}</div></button>
        </section>
        </>
    )
}

export default Loguot;