import BlackBox from 'component/common/BlackBox';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import emoticon from '../img/emoticon.png';
import calendar from '../img/calendar.png';
import illustrate from '../img/illustrate.png';
import { backgroundClova } from 'img';
export default function Home() {
  return (
    <>
      <Background>
        <Year>2023</Year>
        <BlackBox>♪새해 첫 곡 럭키 슬롯♪</BlackBox>
        <SubTitle>
          당신에게 행운을 가져다 줄 새해 첫 곡,
          <br />
          럭키 슬롯에서 뽑아보세요!
        </SubTitle>
        <img src={illustrate} width='230px' alt='' />
        <NavLink style={{ textDecorationLine: 'none' }} to='name'>
          <StartButton>시작하기!</StartButton>
        </NavLink>
        <img src={backgroundClova} alt=''></img>
      </Background>
    </>
  );
}

const Background = styled.div`
  min-height: 812px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Year = styled.div`
  font-size: 16px;
  font-weight: 900;
  line-height: 28px;
  color: #00c981;
  text-align: center;
  margin-top: 30%;
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
  margin-top: 2rem;
  margin-bottom: 30px;
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
`;
