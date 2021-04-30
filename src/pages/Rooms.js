import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Rooms = () => {
  return (
    <>
      <Navbar />
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
      <Footer />
    </>
  );
};

export default Rooms;