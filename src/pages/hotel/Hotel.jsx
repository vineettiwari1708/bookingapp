import React, { useState } from "react";
import "../hotel/hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Maillist from "../../components/maillist/Maillist";
import Footer from "../../components/footer/Footer";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1578774204375-826dc5d996ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1578774246588-206a52dd6e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1617725658514-52e50345a012?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1621126551993-b22c2a193512?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1629483220891-b19b59a4e7e9?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1649489357325-144ae0b72788?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1630142235146-5f3f8d4fa734?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction)=>{let newSlideNumber;
    if(direction ==="left"){newSlideNumber = slideNumber === 0?8:slideNumber-1;}
    else{newSlideNumber = slideNumber === 8?0:slideNumber+1;}
    setSlideNumber(newSlideNumber)
  }

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("left")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImage"/>
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("right")}/>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="forBooking">Reserve / Book Now ! </button>
          <h1 className="hotelTitle">Omax Appartment</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Gomti Nagar Lucknow</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPrice">
            Book hotel over $111 and get free taxi for Airport
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImageWrapper">
                <img
                  onClick={()=>handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImage"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hoteldetail">
              <h1 className="hotelTitle">Stay in city of Uttar Pradesh</h1>
              <p className="hotelDescription">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                veniam asperiores possimus? Consectetur qui ab expedita
                perspiciatis quidem sunt dicta tempore aliquid labore commodi
                nihil officiis sequi natus fuga quaerat quia est dolores ullam
                cumque totam reprehenderit architecto non, consequuntur
                possimus! Ducimus facere qui cupiditate aliquam deserunt illum
                corrupti quos molestiae, dolorem consequuntur, pariatur autem
                dolorum veniam, hic doloremque quis accusantium commodi impedit?
                Optio obcaecati magni porro ea consectetur voluptas deserunt.
                Perspiciatis omnis accusamus quae, consequatur cumque quos aut
                impedit soluta. Placeat illo vero impedit molestiae laborum
                mollitia ipsa temporibus, excepturi minima quibusdam sunt
                repellendus unde nihil eius id nemo.
              </p>
            </div>
            <div className="hotelTextPrice">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis accusamus laboriosam tempore officia aliquid iure ab
                at deleniti esse. Quae?
              </span>
              <h2>
                <bold>$811</bold> (8 nights)
              </h2>
              <button>Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <Maillist />
      <Footer />
    </>
  );
};
export default Hotel;
