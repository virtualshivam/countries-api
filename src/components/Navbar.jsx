import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [light, setLight] = useState(true);
    const [icon, setIcon] = useState("moon");
    const [mode, setMode] = useState("Dark");

    const theme = () => {
      document.body.classList.toggle("dark-mode")
        if (light) {
          return setLight(false), setIcon("sun"), setMode("Light");
        } else {
          return setLight(true), setIcon("moon"), setMode("Dark");
        }
      };


  return (
    <nav>
      <div className="container-lg container-fluid">
        <div className="row py-3 menu">
          <div className="col-lg-10 col-8 logo ">
            <Link exact to="/">
                <h1>Where in the world?</h1>
            </Link>
          </div>
          <div
            className="col-lg-2 col-4 d-flex justify-content-end mode flex-column flex-md-row"
            style={{ cursor: "pointer" }}
            onClick={theme}
          >
            <i
              className={`far fa-${icon} pt-1 mb-1`}
              
            ></i>
            <p>
              {`${mode}`} Mode
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;