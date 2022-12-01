import BlackBox from 'component/common/BlackBox';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
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
          <NavLink to='name'>
            <StartButton>시작하기</StartButton>
          </NavLink>
        </StartContaier>
      </Background>
    </>
  );
}

const Background = styled.div`
  width: calc(100%-40px);
  height: 200px;
  margin: 25px;
  padding-top: 15px;
  box-shadow: 0px 4px 15px rgba(0, 165, 85, 0.15);
  border-radius: 15px;
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

  text-align: center;
`;
