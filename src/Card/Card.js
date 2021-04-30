import React,{useState , useEffect} from 'react'
import './Card.css'
export default function Card({name = null,url = null,gmail = null,Birthday = null,telephone = null,job = null,favorite = null,gender = null}) {
window.onload = function(){
    //Movement Animation to happen
    const card = document.querySelector(".card");
    const container = document.querySelector(".container");
    //Items
    const title = document.querySelector(".title");
    const sneaker = document.querySelector(".sneaker img");
    const purchase = document.querySelector(".purchase");
    const description = document.querySelector(".info h3");
    
    //MOUSEOUT 
    container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    
    purchase.style.transform = "translateZ(75px)";
    });
    //Animate Out
    container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    });
}
    return (  
        <>
        <div class="body">
            <div class="container">
                <div class="card">
                    <div class="sneaker" >
                        <div class="circle"></div>
                        <img src={url} alt="your picture gonnam display here"/>
                    </div>
                    <div class="info">
                    <h1 class="title">{name}</h1>
                    <h3>{gmail}</h3>
                    <div class="sizes">
                        <button>{Birthday}</button>
                        <button>{telephone}</button>
                        <button class="active">{job}</button>
                        <button>{favorite}</button>
                    </div>
                    <div class="purchase">
                        <button>{gender}</button>
                    </div>
                </div>
                </div>
            </div>
        </div> 
        </>
    )
}
