import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
import Fade from 'react-reveal/Reveal';
const Room = memo(({ room }) => {
  const { name, slug, images, price } = room;
  
  return (
    <Fade top delay={1500}>
    <article className="room">
      <div className="img-container">
        <img  src={images[0] || defaultImg} alt="single room" />
          <div className="price-top">
          <h6>${price}</h6>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
    </Fade>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;