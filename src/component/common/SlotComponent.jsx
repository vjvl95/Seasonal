import { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { imgFileLeft, imgFileRight, category } from './const';
import findIndex from 'util/findIndex';
export default function SlotComponent({ isClick, setIsClick }) {
  const slotIndex = isClick ? findIndex() : '';
  console.log(slotIndex);
  useEffect(() => {
    console.log(isClick);
  }, [isClick]);
  return (
    <>
      <FlexBox>
        <FirstLetter number={slotIndex[0]} isClicked={isClick}>
          {imgFileLeft.map((img, i) => {
            return <img key={i} src={img} width='50px' height='50px' alt='' />;
          })}
        </FirstLetter>
        <SecondLetter number={slotIndex[1]} isClicked={isClick}>
          {imgFileRight.map((img, i) => {
            return <img key={i} src={img} width='50px' height='50px' alt='' />;
          })}
        </SecondLetter>
        <ThridLetter number={slotIndex[2]} isClicked={isClick}>
          {category.map((v, i) => {
            return <span>{v}</span>;
          })}
        </ThridLetter>
      </FlexBox>
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
  height: 50px;
  overflow: hidden;
  box-sizing: border-box;
  margin-right: 2.5rem;
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
  height: 50px;
  color: blue;
  overflow: hidden;
  box-sizing: border-box;
  margin-right: 2.5rem;
  --a: ${(props) => props.number};
  ${(props) =>
    props.isClicked &&
    css`
      img {
        animation: ${scroll} 2s 0s linear forwards, ${scroll2} 5s 2s linear forwards;
      }
    `};
`;

const ThridLetter = styled.div`
  display: flex;
  flex-direction: column;
  height: 30px;
  overflow: hidden;
  span {
    font-size: 30px;
  }
  --a: ${(props) => props.number};
  ${(props) =>
    props.isClicked &&
    css`
      span {
        animation: ${scroll} 2s 0s linear forwards, ${scroll2} 3s 2s linear forwards;
      }
    `};
`;

const FlexBox = styled.div`
  height: 150px;
  width: 300px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 165, 85, 0.1);
  border-radius: 100px;
  border: 1px solid rgba(0, 165, 85, 0.1);
  margin-bottom: 15px;
`;
