import React from "react";
import "../searchitem/searchitem.css";

export const Searchitem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1561501878-aabd62634533?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="searchImg"
      />
        <div className="searchDescription">
            <h1 className="searchTitle">Omax City Appartment in  Lucknow</h1>
            <span className="searchDistance">from 500m of main road</span>
            <span className="searchTaxi">Free Airport Taxi</span>
            <span className="searchSubTitle">appartment with air condition</span>
            <span className="searchFeature">
            1 Room with 1 Bathroom 21 sq m King Size bed
            </span>
            <span className="searchCancel">Free Cancellation</span>
            <span className="searchCancelOption">You can cancel later</span>
        </div>
      <div className="searchDetails">
      <div className="searchRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="searchDetailTexts">
        <span className="searchPrice">$111</span>
        <span className="searchTaxOption">Includes taxes and fees</span>
        <button className="searchCheckButton">See avalability</button>
      </div></div>
    </div>
  );
};
export default Searchitem;
