import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
       <div className="footer">
        <div className="top">
          <div>
            <h1 style={{color:'white'}}>EVENTO</h1>
            <p> WE PLAN YOUR EVENTS </p>
          </div>
          <div>
            <a href="/">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fab fa-instagram-square"></i>
            </a>
            <a href="/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="/">
              <i className="fab fa-behance-square"></i>
            </a>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
