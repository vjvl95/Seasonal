import styled, { keyframes, css } from 'styled-components';
import { imgFileLeft, imgFileRight, category } from './const';
import plusIMG from '../../img/plus.png';
export default function SlotComponent({ slotIndex, isClick, endAnimation }) {
  return (
    <>
      <FlexBox>
        <ThridLetter isClicked={isClick}>
          <img src={category[slotIndex[2]]} width='50px' height='50px' alt='' />;
        </ThridLetter>
        {endAnimation && (
          <img style={{ position: 'relative', right: '20px' }} width='20px' src={plusIMG} alt='' />
        )}
        <FirstLetter number={slotIndex[0]} isClicked={isClick}>
          {imgFileLeft.map((img, i) => {
            return <img key={i} src={img} width='50px' height='50px' alt='' />;
          })}
        </FirstLetter>

        {endAnimation && (
          <img style={{ position: 'relative', right: '20px' }} width='20px' src={plusIMG} alt='' />
        )}
        <SecondLetter number={slotIndex[1]} isClicked={isClick}>
          {imgFileRight.map((img, i) => {
            return <img key={i} src={img} width='50px' height='50px' alt='' />;
          })}
        </SecondLetter>
      </FlexBox>
    </>
  );
}

const scroll = keyframes`
    from{
        transform: translateY(calc(0*100%));
    }

    to{
        transform: translateY(calc(var(--end)*100%));
    }    
`;

const scroll2 = keyframes`
    from{      
        transform: translateY(calc(var(--end)*100%));
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
  --end: -40;
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
  box-sizing: border-box;
  overflow: hidden;
  --end: -46;
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
  height: 50px;
  overflow: hidden;
  margin-right: 2.5rem;
`;

const FlexBox = styled.div`
  height: 140px;
  width: 344px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 40px rgba(0, 165, 85, 0.1);
  border-radius: 100px;
  border: 1.5px solid #bcecd3;
  margin-bottom: 15px;
`;
