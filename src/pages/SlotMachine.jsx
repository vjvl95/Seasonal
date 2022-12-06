import BlackBox from 'component/common/BlackBox';
import { useState } from 'react';
import lever from '../img/lever.png';
import resultPrint from '../img/resultPrint.png';
import SlotMachineBox from '../component/common/SlotComponent';
import styled, { keyframes, css } from 'styled-components';
export default function SlotMachine() {
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <Background>
        <SlotBox>
          <BlackBox>
            가나다라마바사아자차카다 님의 <br />
            새해 첫 곡을 찾아줄 럭키 슬롯
          </BlackBox>
          <SlotMachineBox isClick={isClick} setIsClick={setIsClick} />
        </SlotBox>
        <ButtonBox>
          <Lever isClicked={isClick} onClick={() => setIsClick(!isClick)} src={lever}></Lever>
          {isClick && (
            <>
              <img src={resultPrint} style={{ marginTop: '30px' }} width={'175px'} alt='' />
              <StartButton isClicked={isClick} onClick={() => setIsClick(!isClick)}>
                다음
              </StartButton>
            </>
          )}
        </ButtonBox>
      </Background>
    </>
  );
}

const scroll2 = keyframes`
 from{
  transform: translateZ(0);
 }

	to {
		opacity: 0;
    visibility: hidden;
    height:0px;
    transform: translate3d(-500%, 0, 0);
	}
`;
const scroll = keyframes`
 from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;
const SlotBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const ButtonBox = styled.div`
  background: linear-gradient(#ecfcec, white);

  text-align: center;
  height: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
`;
const Lever = styled.img`
  width: 70px;
  height: 150px;
  margin-top: 20px;
  ${(props) =>
    props.isClicked &&
    css`
      animation: ${scroll2} 5s forwards;
    `};
`;
const Background = styled.div`
  padding-top: 10%;
  width: 100%;
  box-shadow: 0px -4px 10px rgba(0, 165, 85, 0.1);
  border-radius: 200px 200px 0px 0px;
  @media screen and (max-width: 601px) {
    border-radius: 125px 125px 0px 0px;
    padding-top: 15%;
  }
`;
const StartButton = styled.button`
  width: 190px;
  height: 64px;
  font-size: 20px;
  display: inline-block;
  background: #00c981;
  border-radius: 100px;
  margin-top: 30px;

  text-align: center;
  line-height: 55px;
  color: white;
  font-weight: 800;
  border: none;

  ${(props) =>
    props.isClicked &&
    css`
      animation: ${scroll} 5s;
    `};

  &:disabled {
    background: gray;
    border: 3px solid;
    /* &:hover {
          background:
          border: 3px solid 
          cursor: not-allowed;
        } */
  }
`;
