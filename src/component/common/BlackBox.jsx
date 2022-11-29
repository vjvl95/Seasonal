import styled from 'styled-components';

export default function BlackBox({ children, margin }) {
  return <Title margin={margin}>{children}</Title>;
}
const Title = styled.div`
  width: 80%;
  margin: auto;
  height: 4.5rem;
  background-color: black;
  border-radius: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 5px double white;
  margin-top: ${({ margin }) => margin};
`;
