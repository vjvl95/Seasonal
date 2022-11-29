import BlackBox from 'component/common/BlackBox';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
export default function Test() {
  const [name, setName] = useState('');
  const isVaildName = name.length > 1 && name.length <= 20;
  return (
    <>
      <Background>
        <BlackBox>당신의 이름은?</BlackBox>

        <StartContaier>
          <InputBox value={name} onChange={(e) => setName(e.target.value)}></InputBox>
          <NavLink to='/selectCategory'>
            <StartButton disabled={!isVaildName}>다음</StartButton>
          </NavLink>
        </StartContaier>
      </Background>
    </>
  );
}

const Background = styled.div`
  width: calc(100%-40px);
  height: 200px;
  margin: 25px;
  padding-top: 15px;
  border-radius: 15px;
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
const StartContaier = styled.div`
  width: 100%;
  text-align: center;
`;
const InputBox = styled.input`
  width: 250px;
  height: 150px;
  border-radius: 50px;
  margin-top: 30px;
  font-weight: 1000;
  text-align: center;
`;
