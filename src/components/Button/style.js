import styled from "styled-components";

export const MyButton = styled.button`
  background-color: ${(props) =>
    props.whiteStyle ? "var(--white)" : "var(--baby-blue)"};
  border: 3px solid;
  border-color: var(--baby-blue);
  border-radius: 50px;
  color: ${(props) => (props.whiteStyle ? "var(--black)" : "var(--white)")};
  font-size: 19px;
  font-weight: bold;
  height: 61px;
  width: 206px;
`;
