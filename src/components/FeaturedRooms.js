import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";
import Reveal from 'react-reveal/Reveal';
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return (
      <>
      <Room key={room.id} room={room} />;
      </>
      )
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
       
        <div className="featured-rooms-center">
        <Reveal effect="fadeInUp">
          {loading ? <Loading /> : rooms}
          </Reveal>
        </div>
        
      </section>
    );
  }
}