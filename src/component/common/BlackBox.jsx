import styled from 'styled-components';

export default function BlackBox({ children, fontSize, marginTop, paddingTop, isFlex = true }) {
  return (
    <Title fontSize={fontSize} marginTop={marginTop} isFlex={isFlex} paddingTop={paddingTop}>
      {children}
    </Title>
  );
}
const Title = styled.div`
  display: ${({ isFlex }) => (isFlex ? 'flex' : '')};
  justify-content: center;
  align-items: center;
  font-family: DOSGothic;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  width: 330.5px;
  height: 80px;
  text-align: center;
  background-color: black;
  border-radius: 15px;
  color: white;
  border: 5px double white;
  line-height: 20px;
  padding-top: ${({ paddingTop }) => paddingTop};
  margin-top: ${({ marginTop }) => marginTop};
  @media screen and (min-width: 801px) {
    width: 60%;
  }
`;
