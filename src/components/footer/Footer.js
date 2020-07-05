import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
    <div className="footer-div">
      <p className="footer-text">Copyright &copy; 2020, Parul Gupta</p>
      <p className="footer-text">Thanks to SaadPasta</p>
    </div>
    </Fade>
  );
}
