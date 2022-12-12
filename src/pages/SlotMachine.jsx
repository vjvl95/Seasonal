import BlackBox from 'component/common/BlackBox';
import { useState, useMemo } from 'react';
import lever from '../img/lever.png';
import resultPrint from '../img/resultPrint.png';
import SlotMachineBox from '../component/common/SlotComponent';
import styled, { keyframes, css } from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import findIndex from 'util/findIndex';
import { slot } from 'component/common/const';
import { buttonEmoticon } from 'img';
import { useEffect } from 'react';

export default function SlotMachine() {
  const [isClick, setIsClick] = useState(false);
  const [endAnimation, setEndAnimation] = useState(false);
  const location = useLocation();
  const { state } = location;
  const slotIndex = useMemo(() => findIndex(state.category), [state]);

  useEffect(() => {
    if (isClick) {
      setTimeout(() => {
        setEndAnimation(true);
      }, 7000);
    }
  }, [isClick]);

  return (
    <>
      <Background>
        <BlackBox fontSize={'15px'} paddingTop={'15px'} isFlex={false}>
          {isClick ? (
            <>
              <span style={{ fontWeight: '700' }}>{state.name}</span>님에게 <br />
              2023년 <span style={{ fontWeight: '700' }}>{state.category}</span>을 가져다 줄
              노래는..?!
            </>
          ) : (
            <>
              <span style={{ fontWeight: '700' }}>{state.name}</span> 님의 <br />
              새해 첫 곡을 찾아줄 럭키 슬롯!
            </>
          )}
        </BlackBox>
        <SlotBox>
          <SlotMachineBox
            isClick={isClick}
            setIsClick={setIsClick}
            selectCategory={state.category}
            slotIndex={slotIndex}
          />
        </SlotBox>
        <ButtonBox>
          {!isClick && <LeverText>손잡이를 내려 럭키슬롯을 돌려주세요</LeverText>}
          <Lever isClicked={isClick} onClick={() => setIsClick(!isClick)} src={lever}></Lever>
          {isClick && (
            <>
              <img
                src={resultPrint}
                style={{ marginBottom: '15px', marginTop: '15px' }}
                width={'250px'}
                alt=''
              />
              <AfterButton>
                <img src={buttonEmoticon} width={'95px'} height={'108px'} alt=''></img>
                <NavLink
                  to={`/result/${slot[slotIndex[3]][4]}`}
                  state={{ slot: slot[slotIndex[3]], name: state.name }}
                >
                  {endAnimation ? (
                    <StartButton>확인해보기!</StartButton>
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
const AfterButton = styled.div`
  display: flex;
`;
const scroll2 = keyframes`

	to {
		opacity: 0;
    visibility: hidden;
    height:0px;
	}
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
  min-height: 810px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 39.4%;

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
`;
const ButtonBox = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Lever = styled.img`
  width: 70px;
  height: 150px;
  ${(props) =>
    props.isClicked &&
    css`
      animation: ${scroll2} 0s forwards;
    `};
`;
