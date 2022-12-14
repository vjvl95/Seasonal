import styled from 'styled-components';

export default function BlackBox({
  children,
  fontSize,
  marginTop,
  paddingTop,
  isFlex = true,
  widthSize = '30%',
}) {
  return (
    <Title
      fontSize={fontSize}
      marginTop={marginTop}
      isFlex={isFlex}
      paddingTop={paddingTop}
      widthSize={widthSize}
    >
      {children}
    </Title>
  );
}
const Title = styled.div`
  position: absolute;
  display: ${({ isFlex }) => (isFlex ? 'flex' : '')};
  justify-content: center;
  align-items: center;
  font-family: 'DOSGothic';
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  width: 330.5px;
  height: 80px;
  text-align: center;
  background-color: black;
  border-radius: 15px;
  color: white;
  border: 2px solid #8a9299;
  box-shadow: 0 0 0 6px white inset;
  line-height: 20px;
  padding-top: ${({ paddingTop }) => paddingTop};
  margin-top: ${({ marginTop }) => marginTop};
  @media screen and (min-width: 801px) {
    min-width: 450px;

    width: ${({ widthSize }) => widthSize};
  }
`;
