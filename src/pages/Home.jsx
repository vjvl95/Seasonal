import BlackBox from 'component/common/BlackBox';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import illustrate from '../img/illustrate.png';
import { backgroundClova } from 'img';
import trackingPage from '../util/trackingPage';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    trackingPage();
  }, []);

  return (
    <>
      <Background>
        <BlackBox>2023년 ♪새해 첫 곡 럭키 슬롯♪</BlackBox>
        <SubTitle>
          당신에게 행운을 가져다 줄 새해 첫 곡,
          <br />
          럭키 슬롯에서 뽑아보세요!
        </SubTitle>
        <img src={illustrate} width='230px' alt='' />
        <NavLink style={{ textDecorationLine: 'none' }} to='name'>
          <StartButton>시작하기!</StartButton>
        </NavLink>
        <img src={backgroundClova} width='80%' alt=''></img>
      </Background>
    </>
  );
}

const Background = styled.div`
  font-family: 'happinessSans';
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 37%;
  @media screen and (min-width: 801px) {
    padding-top: 34.1%;
  }
`;

const SubTitle = styled.div`
  width: 330px;
  height: 56px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  margin-top: 6rem;
  margin-bottom: 15px;
  font-family: 'happinessSans';
`;

const StartButton = styled.div`
  width: 180px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00c981;
  backdrop-filter: blur(2.5px);
  border-radius: 100px;
  color: white;
  font-weight: 800;
  margin-bottom: 40px;
  margin-top: 40px;
  font-family: 'happinessSans';
`;
