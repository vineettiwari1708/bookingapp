import React from "react";
import "../maillist/maillist.css";

export const Maillist = () => {
  return (
    <div className="mail">
      <div className="mailContainer">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="maildescription">
          Sign up and we'll provide best deal
        </span>
        <div className="mailInput">
          <input type="text" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Maillist;
