import styled from 'styled-components';
export default function Home() {
  return (
    <>
      <Background>
        <Title>
          2023년
          <br />
          ♪새해 첫 곡 럭키 슬롯♪
        </Title>
        <SubTitle>
          당신에게 행운을 가져다 줄 새해 첫 곡,
          <br />
          럭키 슬롯에서 뽑아보세요!
        </SubTitle>
      </Background>
    </>
  );
}

const Background = styled.div`
  width: calc(100%-40px);
  height: 200px;
  margin: 20px;
  padding-top: 10px;
  box-shadow: 0px 4px 15px rgba(0, 165, 85, 0.15);
  border-radius: 15px;
`;
const Title = styled.div`
  width: 80%;
  margin: 0px auto;
  height: 80px;
  background-color: black;
  border-radius: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const SubTitle = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
