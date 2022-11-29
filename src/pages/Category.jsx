import BlackBox from 'component/common/BlackBox';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
export default function Category() {
  const [category, setCategory] = useState('');
  useEffect(() => {
    console.log(category);
  });
  const data = [
    ['money', '💰', '재물운'],
    ['health', '💪', '건강운'],
    ['love', '💗', '애정운'],
    ['study', '📚', '학업운'],
    ['lucky', '🎁 ', '행운'],
    ['work', '👔', '직장운'],
  ];
  return (
    <>
      <Background>
        <BlackBox>어떤 운세를 원하시나요?</BlackBox>

        <FlexBox onChange={(e) => setCategory(e.target.value)}>
          <FlexItem>
            {data.map((v, i) => {
              return (
                <>
                  <HiddenRadioButton id={v[0]} type='radio' name='category' value={v[2]} />
                  <RadioButton htmlFor={v[0]}>{v[1] + v[2]}</RadioButton>
                </>
              );
            })}
          </FlexItem>
        </FlexBox>
      </Background>
    </>
  );
}

const Background = styled.div`
  margin-top: 30px;
  width: 100%;
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
const FlexItem = styled.div`
  width: 80%;
  margin-left: ${(props) => props.margin};
  align-items: center;
`;
const FlexBox = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 600px) {
  }
`;

const RadioButton = styled.label`
  display: inline-block;
  width: 40%;
  height: 3rem;
  border-radius: 20px;
  background-color: white;
  border: 2px solid #a5f7ce;
  text-align: center;
  margin: 0.8rem;
  line-height: 3rem;
  box-shadow: rgba(165, 247, 206, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  cursor: pointer;
  @media screen and (min-width: 600px) {
    background-color: white;
  }
`;
const HiddenRadioButton = styled.input`
  display: none;
  &:checked + ${RadioButton} {
    transition: 0.5s;
    transform: scale(1.1);
  }
`;
