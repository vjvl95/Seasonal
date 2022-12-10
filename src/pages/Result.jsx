import BlackBox from 'component/common/BlackBox';
import styled, { keyframes, css } from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import selectBackGround from 'util/selectBackground';
import { useState } from 'react';
export default function Result() {
  const location = useLocation();
  const { state } = location;
  const backGroundIMG = selectBackGround(state.slot[3]);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Background back={backGroundIMG[0]}>
        <BlackBox>
          {state.name} 님의 <br />
          새해 첫 곡을 찾아줄 럭키 슬롯
        </BlackBox>
        <AlbumBox isClicked={isClicked}>
          <Front>
            <Title>{state.slot[6]}</Title>
            <Singer>{state.slot[7]}</Singer>
            <Album src={state.slot[8]}></Album>
            <Lyrics color={backGroundIMG[1]}>{state.slot[5]}</Lyrics>
          </Front>
          <Back>
            <BackIMG src={state.slot[9]} width={'100%'}></BackIMG>
          </Back>
        </AlbumBox>
        <StartButton onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? '카드 뒤집어서 노래 보기' : '카드 뒤집어서 짤 보기'}
        </StartButton>
      </Background>
    </>
  );
}
const BackIMG = styled.img`
  margin-top: 70px;
  max-height: 150px;
  @media screen and (min-width: 801px) {
    max-height: 500px;
  }
`;
const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;
const Back = styled.div`
  position: relative;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
const Lyrics = styled.div`
  margin-top: 30px;
  font-weight: 700;
  font-size: 13.39px;
  padding: 0px 20px;
  line-height: 20px;
  color: ${(props) => props.color};
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 15.62px;
  margin-bottom: 20px;
  margin-top: 10px;
`;
const Album = styled.img`
  width: 111px;
  margin: 0px auto;
  border-radius: 13px;
  @media screen and (min-width: 801px) {
    width: 200px;
    height: 200px;
  }
`;
const Singer = styled.div`
  font-weight: 800;
  font-size: 13.39px;
  color: gray;
  margin-bottom: 30px;
`;
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 148px;
  height: 100vh;

  background-image: ${(props) => `url(${props.back})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
const AlbumBox = styled.div`
  width: 233px;
  height: 356px;
  background-color: white;
  margin: 30px auto;
  border-radius: 25px;
  text-align: center;
  padding-top: 20px;
  align-items: center;
  perspective: 1100px;
  box-shadow: 2px 4px 10px rgba(75, 81, 88, 0.25);
  position: relative;
  transition: 3s;
  transform-style: preserve-3d;

  @media screen and (min-width: 801px) {
    width: 400px;
    height: 500px;
  }
  ${(props) =>
    props.isClicked &&
    css`
      transform: rotateY(-180deg);
    `};
`;
const StartButton = styled.button`
  width: 184px;
  height: 64px;
  font-size: 14px;
  display: block;
  background: #00c981;
  border-radius: 100px;
  text-align: center;
  line-height: 55px;
  color: white;
  margin: 0 auto;
  font-weight: 700;
  border: none;

  &:disabled {
    background: gray;
    border: 3px solid;
  }
`;
