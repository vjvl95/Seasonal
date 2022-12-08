import BlackBox from 'component/common/BlackBox';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

import {
  moneyBackground,
  healthyBackground,
  loveBackground,
  workBackground,
  luckyBackground,
  studyBackground,
} from 'img';
export default function Result() {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  return (
    <>
      <Background back={moneyBackground}>
        <BlackBox>
          {state.name} 님의 <br />
          새해 첫 곡을 찾아줄 럭키 슬롯
        </BlackBox>
        <AlbumBox>
          <Title>{state.slot[6]}</Title>
          <Singer>{state.slot[7]}</Singer>
          <Album></Album>

          <Lyrics>{state.slot[5]}</Lyrics>
        </AlbumBox>
      </Background>
    </>
  );
}
const Lyrics = styled.div`
  margin-top: 30px;
  font-weight: 800;
  font-size: 18px;
  padding: 0px 15px;
  color: skyblue;
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 20px;
`;
const Album = styled.div`
  width: 150px;
  height: 150px;
  background-color: gray;
  margin: 0px auto;
`;
const Singer = styled.div`
  font-weight: 800;
  font-size: 22px;
  color: gray;
  margin-bottom: 30px;
`;
const Background = styled.div`
  padding-top: 15%;
  width: 100%;
  height: 100vh;
  background-image: ${(props) => `url(${props.back})`};
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 601px) {
    padding-top: 15%;
  }
`;
const AlbumBox = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  margin: 30px auto;
  border-radius: 30px;
  text-align: center;
  padding-top: 20px;
  align-items: center;
`;
