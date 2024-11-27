import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css'; 
import SouthKorea from '../Images/SouthKorea.jpg';
import Canada from '../Images/Canada.jpg';
import Likelion from '../Images/Likelion.png';

function Main() {
  return (
    <div className="BigContainer">
      <h1>저를 소개합니다!</h1>
      <div className="ImageContainer">
        <Link to="/korea">
          <img src={SouthKorea} alt="Korea" className="image" />
          <p>이민수</p>
        </Link>
        <Link to="/canada">
          <img src={Canada} alt="Canada" className="image" />
          <p>Peter Lee</p>
        </Link>
        <Link to="/likelion">
          <img src={Likelion} alt="Canada" className="image" />
          <p>피터</p>
        </Link>
      </div>
    </div>
  );
}

export default Main;
