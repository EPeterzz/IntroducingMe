import React from 'react';
import './Canada.css';
import HorseshoeBay1 from '../Images/HorseshoeBay1.jpg';
import HorseshoeBay2 from '../Images/HorseshoeBay2.jpg';
import GoodNight from '../Images/GoodNight.jpg';
import Vancouver from '../Images/Vancouver.jpg';
import Salmon from '../Images/Salmon.jpg';
import Starbucks from '../Images/Starbucks.jpg';

function Canada() {
  return (
    <div className="CanadaContainer">
      <header>
        <h1 className="title">캐나다에서의 유학생활</h1>
        <p className="subContainer">4년반의 이야기</p>
      </header>

      <div className="image-gallery">
        <div className="image-item">
          <img src={HorseshoeBay1} alt="Horseshoe Bay" className="canada-image" />
          <p className="image-caption">Horseshoe Bay</p>
        </div>
        <div className="image-item">
          <img src={HorseshoeBay2} alt="Horseshoe Bay" className="canada-image" />
          <p className="image-caption">Victoria Island 가기 전</p>
        </div>
        <div className="image-item">
          <img src={GoodNight} alt="Good Night" className="canada-image" />
          <p className="image-caption">신기한 기분</p>
        </div>
        <div className="image-item">
          <img src={Vancouver} alt="Vancouver" className="canada-image" />
          <p className="image-caption">밴쿠버 다운타운</p>
        </div>
        <div className="image-item">
          <img src={Salmon} alt="Salmon" className="canada-image" />
          <p className="image-caption">Piroshky Piroshky</p>
        </div>
        <div className="image-item">
          <img src={Starbucks} alt="Starbucks" className="canada-image" />
          <p className="image-caption">스타벅스 1호점</p>
        </div>
      </div>

    </div>
  );
}

export default Canada;