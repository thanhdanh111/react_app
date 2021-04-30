import React, { useState } from 'react'
import './Form.css'
import firebase from '../chat/firebase'
import FolderIcon from "../Card/assets/folder_icon_transparent.png";
import {  Container, BoxUpload, ImagePreview } from "../Card/Preview";

import CloseIcon from "../Card/assets/CloseIcon.svg";
import { storage } from '../chat/firebase'
import Card from '../Card/Card'
import { set } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Form({user = null , db = null, nameProcard, slug}) {
    console.log("dasdsa",nameProcard);
    const { uid, displayName, photoURL } = user;
    //images
    const [images , setImages] = useState(null)
    const [image, setImage] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);
    const [typeFile, setTypeFile] = useState("");
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    // another elements
    const [name , setName] =useState("");
    const [birthday , setBirthday] =useState("");
    const [address , setAddress] =useState("");
    const [telephone , setTelephone] =useState("");
    const [email , setEmail] =useState("");
    const [job , setJob] =useState("");
    const [gender , setGender] =useState("");
    const [favorite , setFavorite] =useState("");
    const [hello, setHello] = useState("")
    const [accept ,  setAccept] = useState(false)
    const [newMessage, setNewMessage] = useState([]); 

    // handlechange for images
    const acceptRoom = () =>{
        setAccept(true)
    }
    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            setImages(e.target.files[0])
            setTypeFile(e.target.files[0].type);
            let reader = new FileReader();
            reader.onload = function (e) {
                setImage(e.target.result);
                setIsUploaded(true);
            };
            reader.readAsDataURL(e.target.files[0]);
            }
    }
    //handlechange for name
    const handlechangForName = e =>{
        setName(e.target.value)
        console.log(name)
    }
    //handlechange for birthday
    const handlechangForBirthday = e =>{
        setBirthday(e.target.value)
        console.log(birthday)
    }
    //handlechange for address
    const handlechangForAddress = e =>{
        setAddress(e.target.value)
        console.log(address)
    }
    //handlechange for telephone
    const handlechangForTelephone = e =>{
        setTelephone(e.target.value)
        console.log(telephone)
    }
    //handlechange for Email
    const handlechangForEmmail = e =>{
        setEmail(e.target.value)
        console.log(email)
    }
    //handlechange for Job
    const handlechangForJob = e =>{
        setJob(e.target.value)
        console.log(job)
    }
    //handlechange for gender
    const handlechangForGender = e =>{
        setGender(e.target.value)
        console.log(gender)
    }
    //handlechange for Favorite    
    const handlechangForFavorite = e =>{
        setFavorite(e.target.value)
        console.log(favorite)
    }
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${images.name}`).put(images);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 1000
            );
            setProgress(progress);
            console.log(
              progress
            );
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(images.name)
              .getDownloadURL()
              .then(url => {
                setUrl(url);
            });
          }
        );
       
    };

    console.log("hell0",url);
    const handleSumit = (e) => {
        e.preventDefault();
        if(db){
                db.collection(nameProcard).add({
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    name: name,
                    birthday: birthday,
                    address: address,
                    telephone: telephone,
                    email: email,
                    gender: gender,
                    url: url,
                    favorite: favorite,              
                    uid,
                    displayName,
                    photoURL
                })
        }
        setNewMessage('');
    }
    
    return (
        // <div className="add-card" style={{perspective:"1000px"}}>
        // <form className="form-container" onSubmit={handleSumit}  >
        //     <div className="form">
        //         <input type="text" name="name" autoComplete="off" required onChange={handlechangForName} />
        //         <label for="name" className="label-name">
        //             <span className="content-name">Name</span>
        //         </label>
        //     </div>
        //     <div className="form">
        //         <input type="date" name="name"  required autoComplete="off" onChange={handlechangForBirthday}/>
        //         <label for="name" className="label-name">
        //             <span className="content-name">Birthday</span>
        //         </label>
        //     </div>
        //     <div className="form">
        //         <input type="text" name="name" autoComplete="off" required onChange={handlechangForAddress}/>
        //         <label for="name" className="label-name">
        //             <span className="content-name">Address</span>
        //         </label>
        //     </div>
        //     <div className="form">
        //         <input type="tel" name="name" autoComplete="off" required onChange={handlechangForTelephone}  />
        //         <label for="name" className="label-name">
        //             <span className="content-name">Telephone</span>
        //         </label>
        //     </div>
        //     <div className="form">
        //         <input type="email" name="name" autoComplete="off" required onChange={handlechangForEmmail} />
        //         <label for="name" className="label-name">
        //             <span className="content-name">Email</span>
        //         </label>
        //     </div>
        //     <div className="form">
        //         <input type="text" name="name" autoComplete="off" required onChange={handlechangForJob} />
        //         <label for="name" className="label-name">
        //             <span className="content-name">JOB</span>
        //         </label>
        //     </div>
        //     <div className="form" style={{display:'flex',height:"70px"}}>
        //         <div className="form">
        //             <input style={{width:"20px"}} type="radio" name="name" autoComplete="off" required value="Male" onChange={handlechangForGender}/>
        //             <label style={{top:"-10px", border:"none",left:"30px"}} for="name" className="label-name" >
        //                 <span className="content-name"id="radio-name1">Male</span>
        //             </label>
        //         </div>
        //         <div className="form">
        //             <input style={{width:"20px"}} type="radio" name="name" autoComplete="off" required value="Female" onChange={handlechangForGender} />
        //             <label style={{top:"-10px", border:"none",left:"30px"}} for="name" className="label-name">
        //                 <span className="content-name" id="radio-name">Female</span>
        //             </label>
        //         </div>
        //     </div>
        //     <div className="form">
        //         <input type="text" name="name"   onChange={handlechangForFavorite} />
        //         <label for="name" className="label-name">
        //             <span className="content-name">favorite</span>
        //         </label>
        //     </div>
        //     <div className="picture" autoComplete="off" required>
        //     < >    
        //     <Container>
        //         <BoxUpload>
        //             <div className="image-upload" >
        //                 {!isUploaded ? (
        //                 <>
        //                     <label htmlFor="upload-input">
        //                     <img
        //                     src={FolderIcon}
        //                     draggable={"false"}
        //                     alt="placeholder"
        //                     style={{ width: 100, height: 100 }}
        //                     />
        //                      <p style={{ color: "#444" }}>Select your picture</p>
        //                     </label>

        //                     <input
        //                     id="upload-input"
        //                     type="file"
        //                     accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
        //                     onChange={handleImageChange}
        //                     />
        //                 </>
        //             ) : (
        //             <ImagePreview>
        //                 <img
        //                 className="close-icon"
        //                 src={CloseIcon}
        //                 alt="CloseIcon"
        //                 onClick={() => {
        //                     setIsUploaded(false);
        //                     setImage(null);
        //                 }}
        //                 />
        //                 {typeFile.includes("video") ? (
        //                 <video
        //                     id="uploaded-image"
        //                     src={image}
        //                     draggable={false}
        //                     controls
        //                     autoPlay
        //                     alt="uploaded-img"
        //                 />
        //         ) : (
        //           <img
        //             id="uploaded-image"
        //             src={image}
        //             draggable={false}
        //             alt="uploaded-img"
                   
        //           />
        //             )}
        //          </ImagePreview>
        //          )}
        //          </div>
        //         </BoxUpload>
        //     </Container>
        //     </>
        //     </div>
        //     <div className="form">
        //         <input type="radio" name="hello" value="hh"
        //          onClick={handleUpload} />
        //     </div>
        //     <div className="form" style={{textAlign:"center", marginTop:"30px"}}>
        //         <button type="submit" style={{width:"120px"}} 
        //         disabled={!url}
        //         autoComplete="on" required
        //         onClick={acceptRoom}
        //         >aDD
        //             </button>
        //             {accept ?  <a class="btn-primary" href={`/rooms/${slug}/${nameProcard}`}>RoomAccept</a> : null }
                   
        //     </div>   
        // </form>
        //   <img  />
        // </div>
        <div class="l-form">
            <form action="" class="form" onSubmit={handleSumit}>
            <h1 class="form__title">FORM</h1>
            <div class="form__div">
                    <input type="text" class="form__input" placeholder=" "autoComplete="off" required onChange={handlechangForName}/>
                    <label for="" class="form__label">Name</label>
            </div>
            <div class="form__div">
                    <input type="date" class="form__input" placeholder=" " autoComplete="off" required onChange={handlechangForBirthday} />
                    <label for="" class="form__label">Birthday</label>
            </div>
            <div class="form__div">
                    <input type="text" class="form__input" placeholder=" " autoComplete="off" required onChange={handlechangForAddress} />
                    <label for="" class="form__label">Address</label>
            </div>
            <div class="form__div">
                    <input type="text" class="form__input" placeholder=" " autoComplete="off" required onChange={handlechangForTelephone} />
                    <label for="" class="form__label">Telephone</label>
            </div>
            <div class="form__div">
                    <input type="email" class="form__input" placeholder=" " autoComplete="off" required onChange={handlechangForEmmail} />
                    <label for="" class="form__label">Email</label>
            </div>
            <div class="form__div">
                    <input type="text" class="form__input" placeholder=" " autoComplete="off" required onChange={handlechangForJob} />
                    <label for="" class="form__label">Job</label>
            </div>
            <div class="form__div_gender">
                <div className="form__div_gender_container">
                    <input type="radio" id="male" name="gender" value="male" autoComplete="off" required onChange={handlechangForGender} />
                    <label for="male">Male</label>
                </div>
                <div className="form__div_gender_container">
                    <input type="radio" id="male" name="gender" value="Female" autoComplete="off" required onChange={handlechangForGender} />
                    <label for="male">Female</label>
                </div>
                
            </div>
            <div class="form__div">
                    <input type="text" class="form__input" placeholder=" "/>
                    <label for="" class="form__label">Favorite</label>
            </div>
            <div class="form__div_img">
                 <Container>
                 <BoxUpload>
                     <div className="image-upload" >
                         {!isUploaded ? (
                         <>
                             <label htmlFor="upload-input">
                             <img
                             src={FolderIcon}
                             draggable={"false"}
                             alt="placeholder"
                             style={{ width: 100, height: 100 }}
                             />
                              <p style={{ color: "#444" }}>Select your picture</p>
                             </label>

                             <input
                             id="upload-input"
                             type="file"
                             accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                             onChange={handleImageChange}
                             />
                         </>
                 ) : (
                     <ImagePreview>
                         <img
                         className="close-icon"
                         src={CloseIcon}
                         alt="CloseIcon"
                         onClick={() => {
                             setIsUploaded(false);
                             setImage(null);
                         }}
                         />
                         {typeFile.includes("video") ? (
                         <video
                             id="uploaded-image"
                             src={image}
                             draggable={false}
                             controls
                             autoPlay
                             alt="uploaded-img"
                         />
                 ) : (
                   <img
                     id="uploaded-image"
                     src={image}
                     draggable={false}
                     alt="uploaded-img"
                   
                   />
                     )}
                  </ImagePreview>
                  )}
                  </div>
                 </BoxUpload>
            </Container>

            </div>
            <div class="form__div_confirm">
                    <input type="radio" onClick={handleUpload}/>
                    <label for="male">Confirm</label>
            </div>
            <input type="submit" class="form__button" disabled={!url}
                 autoComplete="on" required
                onClick={acceptRoom} value="Sign In"/>
                
                     {accept ?  <a class="btn-primary" href={`/rooms/${slug}/${nameProcard}`}>RoomAccept</a> : null }
                
            </form>
            
        </div>
    )
}

