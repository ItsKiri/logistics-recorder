import React from "react";
import { Link } from "react-router-dom";
import RecordManager from "../modules/RecordManager";
import MainPage from "./MainPage";
/**
 *
 * @returns
 */
function RecordsPage() {
  const rm = new RecordManager();
  return (
    <div className="RecordsPage">
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <hr />
      <img
        src={require("../images/2.jpeg")}
        className="center"
        width="444"
        height="249.6"
      ></img>
      <MainPage rm={rm}></MainPage>
    </div>
  );
}

export default RecordsPage;
