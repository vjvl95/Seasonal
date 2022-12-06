import BlackBox from 'component/common/BlackBox';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import emoticon from '../img/emoticon.png';
import calendar from '../img/calendar.png';

export default function Home() {
  return (
    <>
      <Background>
        <BlackBox>
          2023년
          <br />
          ♪새해 첫 곡 럭키 슬롯♪
        </BlackBox>
        <SubTitle>
          당신에게 행운을 가져다 줄 새해 첫 곡,
          <br />
          럭키 슬롯에서 뽑아보세요!
        </SubTitle>
        <StartContaier>
          <div>
            <img src={emoticon} width='100px' alt='' />
            <img src={calendar} width='50px' alt='' />
          </div>
          <NavLink to='name'>
            <StartButton>시작하기</StartButton>
          </NavLink>
        </StartContaier>
      </Background>
    </>
  );
}

const Background = styled.div`
  padding-top: 10%;
  width: 100%;
  box-shadow: 0px -4px 10px rgba(0, 165, 85, 0.1);
  border-radius: 125px 125px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 601px) {
    border-radius: 125px 125px 0px 0px;
    padding-top: 15%;
  }
`;

const SubTitle = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 23px;
`;

const StartButton = styled.div`
  width: 190px;
  height: 64px;
  display: inline-block;
  background: #00c981;
  backdrop-filter: blur(2.5px);
  border-radius: 100px;
  margin-top: 60px;
  text-align: center;
  line-height: 55px;
  color: white;
  font-weight: 800;
`;
const StartContaier = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
