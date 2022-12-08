import BlackBox from 'component/common/BlackBox';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
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
          <FlexItem>
            {data.map((v) => {
              return (
                <span key={v[0]}>
                  <HiddenRadioButton id={v[0]} type='radio' name='category' value={v[2]} />
                  <RadioButton htmlFor={v[0]}>{v[1] + v[2]}</RadioButton>
                </span>
              );
            })}
          </FlexItem>
        </FlexBox>
        <div style={{ textAlign: 'center' }}>
          <NavLink to='/slotMachine' state={{ category: category, name: name }}>
            <StartButton>다음</StartButton>
          </NavLink>
        </div>
      </Background>
    </>
  );
}

const Background = styled.div`
  padding-top: 10%;
  width: 100%;
  box-shadow: 0px -4px 10px rgba(0, 165, 85, 0.1);
  border-radius: 125px 125px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
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
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 601px) {
    margin-top: 30px;
    padding-left: 50px;
    margin-bottom: 20px;
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
  @media screen and (min-width: 601px) {
  }
`;
const HiddenRadioButton = styled.input`
  display: none;
  &:checked + ${RadioButton} {
    transition: 0.5s;
    transform: scale(1.2);
    background-color: rgba(165, 247, 206, 0.5);
  }
`;
