import styled from 'styled-components';
export default function Home() {
  return (
    <>
      <Background>
        <Title></Title>
      </Background>
    </>
  );
}

const Background = styled.div`
  width: calc(100%-40px);
  height: 200px;
  margin: 20px;
  box-shadow: 0px 4px 15px rgba(0, 165, 85, 0.15);
  border-radius: 20px;
`;
const Title = styled.div``;
