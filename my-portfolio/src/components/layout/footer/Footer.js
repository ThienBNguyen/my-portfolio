import React from "react";
import "./Footer.scss"
export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <h4>A creative self-taught developer in ATX.</h4>
        <p>Email: <a href="https://mail.google.com/mail/u/0/" target="_blank">thienn1091@gmail.com</a></p>
        <p>Austin, TX</p>
      </div>
      <div>
        <ul>
          <li><a href="https://www.facebook.com/thienn103" target="_blank"><i className="fa fa-facebook-square"></i> Facebook</a></li>
          <li><a href="https://www.linkedin.com/in/thienbng/" target="_blank"><i className="fa fa-linkedin"></i> linkedin</a></li>
          <li><a href="https://github.com/ThienBNguyen" target="_blank"><i className="fa fa-github"></i> github</a></li>
        </ul>
      </div>
    </div>
  );
}
