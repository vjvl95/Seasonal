import BlackBox from 'component/common/BlackBox';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

export default function Name() {
  const [name, setName] = useState('');
  const isVaildName = name.length > 1 && name.length <= 20;
  return (
    <>
      <Background>
        <BlackBox>당신의 이름은?</BlackBox>

        <StartContaier>
          <InputBox value={name} onChange={(e) => setName(e.target.value)}></InputBox>
          <NavLink to='/selectCategory' state={{ name: name }}>
            {isVaildName ? (
              <StartButton disabled={!isVaildName}>다음</StartButton>
            ) : (
              <StartButton disabled={!isVaildName}>이름을 입력해주세요</StartButton>
            )}
          </NavLink>
        </StartContaier>
      </Background>
    </>
  );
}

const Background = styled.div`
  min-height: 812px;
  height: 100vh;
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
  margin-top: 30px;
  text-align: center;
  line-height: 17.5px;
  color: white;
  font-weight: 800;
  background: #00c981;
  border: 0px solid;
  &:disabled {
    background: gray;
    border: 3px solid;
  }
`;
const StartContaier = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputBox = styled.input`
  width: 340px;
  height: 144px;
  margin-top: 30px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;

  border: 1.5px solid #bcecd3;
  box-shadow: 0px 4px 20px 5px rgba(0, 165, 85, 0.1);
  border-radius: 100px;
`;
