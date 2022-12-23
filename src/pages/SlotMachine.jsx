import BlackBox from 'component/common/BlackBox';
import { useState, useMemo } from 'react';
import lever_ball from '../img/lever_ball.png';
import lever_bar from '../img/lever_bar.png';

import resultPrint from '../img/resultPrint.png';
import SlotMachineBox from '../component/common/SlotComponent';
import styled, { keyframes, css } from 'styled-components';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import findIndex from 'util/findIndex';
import { slot } from 'component/common/const';
import { buttonEmoticon } from 'img';
import { useEffect } from 'react';
import selectBackGround from '../util/selectBackground';

export default function SlotMachine() {
  const [isClick, setIsClick] = useState(false);
  const [endAnimation, setEndAnimation] = useState(false);
  const [leverOut, setLeverOut] = useState(false);
  const location = useLocation();
  const { state } = location;
  const nav = useNavigate();

  const slotIndex =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    state === null ? nav('/404') : useMemo(() => findIndex(state?.category), [state]);
  const categoryColor = null
    ? nav('/404')
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useMemo(() => selectBackGround(state?.category), [state]);
  useEffect(() => {
    if (isClick) {
      setTimeout(() => {
        setEndAnimation(true);
      }, 7000);
      setTimeout(() => {
        setLeverOut(true);
      }, 2000);
    }
  }, [isClick]);

  return (
    <>
      <Background>
        <BlackBox fontSize={'15px'} paddingTop={'15px'} isFlex={false}>
          {isClick ? (
            <>
              <span style={{ fontWeight: '700', color: '#00F19A' }}>{state?.name}</span>님에게{' '}
              <br />
              2023년{' '}
              <span style={{ fontWeight: '700', color: categoryColor[1] }}>{state?.category}</span>
              을 가져다 줄 노래는..?!
            </>
          ) : (
            <>
              <span style={{ fontWeight: '700', color: '#00F19A' }}>{state?.name}</span> 님의 <br />
              새해 첫 곡을 찾아줄 럭키 슬롯!
            </>
          )}
        </BlackBox>
        <SlotBox>
          <SlotMachineBox
            isClick={isClick}
            setIsClick={setIsClick}
            selectCategory={state?.category}
            slotIndex={slotIndex}
            endAnimation={endAnimation}
          />
        </SlotBox>
        <ButtonBox>
          {!isClick && <LeverText>손잡이를 터치해서 럭키슬롯을 돌려주세요</LeverText>}

          <Lever isClicked={isClick} onClick={() => setIsClick(!isClick)}>
            <LeverImgBall src={lever_ball} alt='' isBall={true} isClicked={isClick} />

            <LeverImgBar src={lever_bar} alt='' />
          </Lever>
          {isClick && leverOut && (
            <>
              <ResultPrint
                src={resultPrint}
                isEndAnimation={endAnimation}
                isLeverOut={leverOut}
                width={'250px'}
                alt=''
              />
              <AfterButton isLeverOut={leverOut}>
                <img src={buttonEmoticon} width={'95px'} height={'108px'} alt=''></img>
                <NavLink
                  to={`/result/${slot[slotIndex[3]][4]}?name=${state?.name}&category=${
                    state?.category
                  }`}
                  state={{ slot: slot[slotIndex[3]], name: state?.name, category: state?.category }}
                >
                  {endAnimation ? (
                    <StartButton>결과 확인하기</StartButton>
                  ) : (
                    <StartButton disabled endAnimation={endAnimation}>
                      결과를 기다려주세요
                    </StartButton>
                  )}
                </NavLink>
                <img
                  style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}
                  src={buttonEmoticon}
                  alt=''
                  width={'95px'}
                  height={'108px'}
                ></img>
              </AfterButton>
            </>
          )}
        </ButtonBox>
      </Background>
    </>
  );
}

const scroll = keyframes`

to{
  transform:translate(0px,150px)
  }
`;

const scroll2 = keyframes`

to {
		opacity: 0;
    visibility: hidden;
    height:0px;
	}
`;

const scroll3 = keyframes`
from{opacity:0}
to {
		opacity: 1;

	}
`;

const ResultPrint = styled.img`
  margin-bottom: 45px;
  margin-top: 15px;
  border-radius: 10px;
  ${(props) =>
    props.isLeverOut &&
    css`
      animation: ${scroll3} 3s 0s linear forwards;
    `};
`;
const LeverImgBall = styled.img`
  position: relative;
  top: 30px;
  right: 5px;
  ${(props) =>
    props.isBall &&
    props.isClicked &&
    css`
      animation: ${scroll} 2s 0s forwards;
    `};
`;
const LeverImgBar = styled.img``;
const AfterButton = styled.div`
  display: flex;
  ${(props) =>
    props.isLeverOut &&
    css`
      animation: ${scroll3} 3s 0s linear forwards;
    `};
`;
const LeverText = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  color: #00c981;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 39.4%;
  height: 100vh;
  @media screen and (min-width: 801px) {
    padding-top: 34.1%;
  }
`;
const StartButton = styled.button`
  width: 184px;
  height: 64px;
  font-size: 14px;
  background: #00c981;
  border-radius: 100px;
  text-align: center;
  color: white;
  font-weight: 700;
  border: none;
  line-height: 17.5px;
  &:disabled {
    background: gray;
    border: 3px solid;
  }
`;
const SlotBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;
const ButtonBox = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Lever = styled.div`
  width: 70px;
  height: 150px;
  ${(props) =>
    props.isClicked &&
    css`
      animation: ${scroll2} 2s 0s linear forwards;
    `};
`;
