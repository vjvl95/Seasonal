import BlackBox from 'component/common/BlackBox';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { data } from '../component/common/const';

export default function Category() {
  const location = useLocation();
  const { state } = location;
  const [category, setCategory] = useState('');
  const [name] = useState(state.name);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Background>
        <BlackBox>어떤 운세를 원하시나요?</BlackBox>

        <FlexItem onChange={(e) => setCategory(e.target.value)}>
          {data.map((v) => {
            return (
              <span key={v[0]}>
                <HiddenRadioButton id={v[0]} type='radio' name='category' value={v[2]} />
                <RadioButton onClick={() => setIsClicked(true)} htmlFor={v[0]}>
                  {v[1] + ' ' + v[2]}
                </RadioButton>
              </span>
            );
          })}
        </FlexItem>
        <div style={{ textAlign: 'center' }}>
          <NavLink to='/slotMachine' state={{ category: category, name: name }}>
            {isClicked ? (
              <StartButton category={category}>다음</StartButton>
            ) : (
              <StartButton disabled>하나의 운세를 선택해주세요</StartButton>
            )}
          </NavLink>
        </div>
      </Background>
    </>
  );
}

const Background = styled.div`
  min-height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 37%;
  @media screen and (min-width: 801px) {
    padding-top: 34.1%;
  }
`;
const StartButton = styled.button`
  width: 184px;
  height: 64px;
  font-size: 14px;
  display: inline-block;
  border-radius: 100px;
  text-align: center;
  line-height: 17.5px;
  margin-top: 30px;
  color: white;
  font-weight: 800;
  background: #00c981;
  border: 0px solid;

  &:disabled {
    background: gray;
    font-size: 12px;
  }
`;
const FlexItem = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;

  @media screen and (min-width: 801px) {
    width: 80%;
    margin: 0px auto;
    margin-top: 30px;
  }
`;

const RadioButton = styled.label`
  display: inline-block;
  min-width: 150px;
  width: 100%;
  height: 82px;
  //margin: 10px;
  border: 1px solid #bcecd3;
  border-radius: 10px;
  text-align: center;
  font-weight: 700;
  line-height: 70px;
  font-size: 18px;
  box-shadow: 0px -10px 3px 1px #a3f1ca inset;

  @media screen and (min-width: 801px) {
    min-width: 230px;
  }

  cursor: pointer;
`;
const HiddenRadioButton = styled.input`
  display: none;
  &:checked + ${RadioButton} {
    box-shadow: 0px 0px 0px 0px #a3f1ca inset;
    transform: scale(0.95);
    background-color: #00c981;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
`;
