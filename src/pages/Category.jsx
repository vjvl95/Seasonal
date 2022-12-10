import BlackBox from 'component/common/BlackBox';
import { NavLink, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import { data } from '../component/common/const';

export default function Category() {
  const location = useLocation();
  const { state } = location;
  const [category, setCategory] = useState('');
  const [name, setName] = useState(state.name);
  useEffect(() => {
    console.log(name);
    console.log(category);
  });

  return (
    <>
      <Background>
        <BlackBox>어떤 운세를 원하시나요?</BlackBox>

        <FlexBox onChange={(e) => setCategory(e.target.value)}>
          <FlexItem margin={'25px'}>
            {data.map((v) => {
              return (
                <span key={v[0]}>
                  <HiddenRadioButton id={v[0]} type='radio' name='category' value={v[2]} />
                  <RadioButton htmlFor={v[0]}>{v[1] + ' ' + v[2]}</RadioButton>
                </span>
              );
            })}
          </FlexItem>
        </FlexBox>
        <div style={{ textAlign: 'center' }}>
          <NavLink to='/slotMachine' state={{ category: category, name: name }}>
            <StartButton category={category}>다음</StartButton>
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
  backdrop-filter: blur(2.5px);
  ${(props) =>
    props.category &&
    css`
      &:disabled {
        background: gray;
        border: 3px solid;
      }
    `};
`;
const FlexItem = styled.div`
  margin-left: ${(props) => props.margin};
  @media screen and (min-width: 801px) {
    margin-left: 0px;
    width: 50%;
  }
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RadioButton = styled.label`
  display: inline-block;
  width: 140px;
  height: 82px;
  border: 1px solid #bcecd3;
  border-radius: 10px;
  text-align: center;
  font-weight: 700;
  margin: 0.8rem;
  line-height: 70px;
  box-shadow: 0px -10px 3px 1px #a3f1ca inset;
  cursor: pointer;
`;
const HiddenRadioButton = styled.input`
  display: none;
  &:checked + ${RadioButton} {
    box-shadow: 0px 0px 0px 0px #a3f1ca inset;

    background-color: #00c981;
    color: white;
  }
`;
