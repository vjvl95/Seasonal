import { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { imgFileLeft, imgFileRight } from './const';
import findIndex from 'util/findIndex';

export default function SlotComponent() {
  const [isClick, setIsClick] = useState(false);

  const slotIndex = findIndex();
  console.log(slotIndex);
  useEffect(() => {
    console.log(isClick);
  }, [isClick]);
  return (
    <>
      <FlexBox>
        <FirstLetter number={slotIndex[0]} isClicked={isClick}>
          {imgFileLeft.map((img, i) => {
            return <img key={i} src={img} width='80px' height='80px' alt='' />;
          })}
        </FirstLetter>
        <SecondLetter number={slotIndex[1]} isClicked={isClick}>
          {imgFileRight.map((img, i) => {
            return <img key={i} src={img} width='80px' height='80px' alt='' />;
          })}
        </SecondLetter>
      </FlexBox>
      <StartButton onClick={() => setIsClick(!isClick)}>다음</StartButton>
    </>
  );
}

const scroll = keyframes`
    from{
        transform: translateY(calc(0*100%));
    }

    to{
        transform: translateY(calc(-25*100%));
    }    
`;

const scroll2 = keyframes`
    from{      
        transform: translateY(calc(-25*100%));
    }    

    to{
        transform: translateY(calc(var(--a)*100%));
    }
`;
const FirstLetter = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  overflow: hidden;
  box-sizing: border-box;
  margin-right: 3rem;
  --a: ${(props) => props.number};

  ${(props) =>
    props.isClicked &&
    css`
      img {
        animation: ${scroll} 2s 0s linear forwards, ${scroll2} 5s 2s linear forwards;
      }
    `};
`;
const SecondLetter = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  color: blue;
  overflow: hidden;
  box-sizing: border-box;
  margin-right: 3rem;

  --a: ${(props) => props.number};
  ${(props) =>
    props.isClicked &&
    css`
      img {
        animation: ${scroll} 2s 0s linear forwards, ${scroll2} 5s 2s linear forwards;
      }
    `};
`;
const FlexBox = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  box-sizing: border-box;
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
