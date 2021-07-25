import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  height: 70px;
  width: 100%;

  .error {
    color: var(--red);
    font-size: 10px;
  }
`;

export const InputContainer = styled.div`
  background: #fff;
  border-radius: 6px;
  border: 0.5px solid;
  border-color: var(--matte-black);
  color: var(--matte-black);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;
  font-family: "Roboto", sans-serif;
  height: 50px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    margin-left: 12px;
    &::placeholder {
      color: var(--gray);
      font-size: 14px;
    }
  }
`;
