import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import illustrate from '../img/illustrate.png';
import HomeButton from '../img/HomeButton.png';
export default function Error() {
  return (
    <>
      <Background>
        <img src={illustrate} width='230px' alt='' />
        <SubTitle>올바르지 않은 접근입니다</SubTitle>

        <NavLink style={{ textDecorationLine: 'none' }} to='name'></NavLink>
        <NavLink
          style={{ display: 'block', color: '#00c981', textDecorationLine: 'none' }}
          to={'/'}
        >
          <InnerBox>
            <img src={HomeButton} width='100px' alt='' />
            <span style={{ marginTop: '15px' }}>홈화면으로</span>
          </InnerBox>
        </NavLink>
      </Background>
    </>
  );
}
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #00c981;
  margin-top: 30px;
`;
const Background = styled.div`
  min-height: 812px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 142px;
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
