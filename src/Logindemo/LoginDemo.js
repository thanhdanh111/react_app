import React, { useEffect, useState, useRef } from 'react';
import './Logindemo.css'
import firebase from '../chat/firebase'
import {auth , db} from '../chat/firebase'
import { element } from 'prop-types';
export default function LoginDemo() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const getEmail = (e) =>{
        setEmail(e.target.value)
    }
    const getPassword = (e) =>{
        setPassword(e.target.value)
    }
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    const setListener = (element ,type ,handler) => {
        if(!element){ 
            return;
        }
        element.addEventListener(type,handler);
    }
    setListener(sign_up_btn,"click", () => {
    container.classList.add("sign-up-mode");
    });

    
    
    setListener(sign_in_btn,"click", () => {
    container.classList.remove("sign-up-mode");
    });
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
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            email,
            password
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
            
        })
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            email,
            password
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
       
    }
     const signOut = async () => {
        try {
          await firebase.auth().signOut();
        } catch (error) {
          console.log(error.message);
        }
        
      };
    return (
        <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input onChange={getEmail} type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input onChange={getPassword} type="password" placeholder="Password" />
            </div>
            <button  class="btn solid" onClick={signIn} >Sign in</button>
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a  class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              
              <a onClick={signInWithGoogle} class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
           
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input onChange={getEmail} type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input onChange={getPassword} type="password" placeholder="Password" />
            </div>
            <button onClick={signUp} class="btn" value="Sign up" >Sign up</button>
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a onClick={signInWithGoogle} class="social-icon">
                <i class="fab fa-google"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn" >
              Sign in
            </button>
          </div>
          <img src="img/register.svg" class="image" alt="" />
        </div>
      </div>
    </div>

    )
}
