import styled from "styled-components";

export const Container = styled.div`
  background-color: #00000096;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background-color: whitesmoke;
    width: 80%;
    max-width: 500px;
    height: 250px;
    border-radius: 30px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .close {
      background-color: transparent;
      border: none;
      color: var(--red);
      font-size: 20px;
      margin-right: 10px;
      margin-top: 5px;
    }
    form {
      width: 100%;
      margin: 10px auto;
      p {
        font-size: 22px;
        text-align: center;
        margin-bottom: 10px;
        color: var(--blue);
      }

      select {
        height: 30px;
        width: 100%;
        margin-bottom: 10px;
      }

      button {
        display: block;
        margin: 0 auto;
        font-size: 16px;
        padding: 5px 10px;
        background-color: var(--blue);
        border-radius: 10px;
        border: none;
        color: var(--white);
        &:hover {
          filter: contrast(0.7);
        }
      }
    }
  }
`;
