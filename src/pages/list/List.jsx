import React from "react";
import "../list/list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Maillist from "../../components/maillist/Maillist";
import Footer from "../../components/footer/Footer";
import Searchitem from "../../components/searchitem/Searchitem";

export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [checkindate, setCheckindate] = useState(location.state.checkindate);
  const [checkoutdate, setCheckoutdate] = useState(location.state.checkoutdate);
  const [option, setOption] = useState(location.state.option);
  console.log(location);
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <input type="date" placeholder={checkindate} />
            </div>
            <div className="listItem">
              <label>Check-out Date</label>
              <input type="date" placeholder={checkoutdate} />
            </div>
            <div className="listItem">
              <label>Option</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="listOptionInput"
                    placeholder={option.adult}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">children</span>
                  <input
                    type="number"
                    min={0}
                    className="listOptionInput"
                    placeholder={option.children}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="listOptionInput"
                    placeholder={option.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
          </div>
        </div>
      </div>
      <Maillist />
      <Footer />
    </>
  );
};
export default List;
