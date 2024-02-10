import React from 'react';

import { useNavigate } from 'react-router-dom';
import './Style.css';
import About from './About';
import Footer from './Footer';
import Navbar from './UserNav';
import Works from './Works';

const Home = () => {
  const navigate = useNavigate();
  const handleNavClick = () => {
    navigate('/userLogin');
  };

  const handleClick=()=>{
    navigate('/adminLogin');
  }
  return (
    <div>
     
    <div className="Home">
    <Navbar/>
      {/* HOME FIRST PAGE */}
      <div className="second">
        <br />
        <br />
        <h1>EVENTOS</h1>
        <div className="second-page">
          <div className="second-text">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
              <br />
              <br />
              <h6>
                SignUp For Contact  Us;)
                <br />
                <br />
                <button className="btn-home" onClick={handleNavClick}>
                  USER
                </button>
                <button className="btn-home" onClick={handleClick}>
                  ADMIN
                </button>
              </h6>
            </p>
          </div>
          <div className="image1">
            <img
              alt=""
              src="https://cdn.drinksfeed.com/2020/01/Event-in-post-135x135-6.jpg"
            />
            <img
              alt=""
              src="https://classyevent.com.au/wp-content/uploads/2023/09/ShangriLa2-1920x1080-1-1024x576.jpg"
            />
          </div>
        </div>
      </div><br/>
      <About/>
      <Works/><br/><br/><br/>
      <Footer/>
    </div>
    </div>
  );
};

export default Home;
