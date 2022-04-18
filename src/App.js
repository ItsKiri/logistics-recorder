import "./App.css";
import { Link } from "react-router-dom";

/**
 *
 * @returns
 */

function App() {
  return (
    <div className="App">
      <Link to="/records">Records</Link>
      <br />
      <Link to="/about">About</Link>
      <hr />
      <h1 align="center">Home Page</h1>
      <br />
      <img src={require("./images/1.jpeg")} className="center"></img>
      <br />
      <h3 align="center">You could save your logistic records here!</h3>
    </div>
  );
}

export default App;
