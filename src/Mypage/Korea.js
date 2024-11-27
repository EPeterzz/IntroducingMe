import React from 'react';
import './Korea.css'; 
import elementaryImg from '../Images/Elementary.jpg';
import middleImg from '../Images/Middle.jpg';

function Korea() {
  return (
    <div className="KoreaContainer">
      <h1 className="title">나의 성장 이야기</h1>
      <div className="timeline">

        
        <div className="timeline-item">
          <h2 className="timeline-title">초등학교 시절</h2>
          <img src={elementaryImg} alt="초등학교" className="timeline-image" />
          <p className="timeline-description">
          초등학교 시절은 정말 아무 생각 없이 놀기만 했었는데 초등학교 6학년이 되고 목동에
          있는 학원에 다니면서 조금씩 현실을 보게 됐어요. 이때부터가 학원 인생의 시작이었죠.
          그래도 초등학교 5, 6학년 때만큼은 제 인생에서 세 손가락에 드는 가장 행복한 순간이었어요.
          </p>
        </div>

        
        <div className="timeline-item">
          <h2 className="timeline-title">중학교 시절</h2>
          <img src={middleImg} alt="중학교" className="timeline-image" />
          <p className="timeline-description">
          이 당시에는 학원과 농구가 인생 전부였어요. 맨날 길거리 농구하고 학원에서 친구들이랑
          놀고 공부하고 하면서 알게 됐죠, 내 이과는 처참하다는 사실을. 중학교 2학년 때부터
          유학을 진지하게 고민하고 결정하게 됐어요.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Korea;