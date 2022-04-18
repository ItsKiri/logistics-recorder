import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @returns
 */
function AboutPage() {
  return (
    <div className='"AboutPage'>
      <Link to="/">Home</Link>
      <br />
      <Link to="/records">Records</Link>
      <hr />
      <img
        src={require("../images/3.jpeg")}
        className="center"
        width="385.8"
        height="385.8"
      ></img>
      <br />
      <h3 align="center">
        This forum is made by Kiri．Still improving it though．．．
      </h3>
    </div>
  );
}

export default AboutPage;
