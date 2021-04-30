import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import RealTime from "../chat/RealTime";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../Map/Map";
import RubberBand from 'react-reveal/RubberBand';
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg ,
      danh : false,
    };
  }
  static contextType = RoomContext;

  render() {
    console.log("danh:",this.state.slug);
    const { getRoom } = this.context;
    console.log("adsa",getRoom);
    const room = getRoom(this.state.slug);
    console.log("roominside:", room);
    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    
    const closeChat = () =>{
      this.setState({danh: !this.state.danh})
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
      slug,
      messages,
      nameProcard,
      lat,
      lng
    } = room;
    const [main, ...defaultImages] = images;
    console.log("aa", lat);
    return (
      <>
      <Navbar />  
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
              <RubberBand>
              <RealTime  messages={messages}  />
              </RubberBand>
              <div className="single-btn">
              <a class="btn-primary" href={`/rooms/${slug}/create-card`}>ACCEPT HIRE</a>
              </div>
        <Footer />
      </>
    );
  }
}
