import styled from "styled-components";

export const LoginContainer = styled.div`
  .login-box {
    .image-container {
      display: none;
    }

    .flex {
      display: flex;
      flex-direction: column;
      align-items: center;

      .container-form {
        width: 268px;

        .title {
          font-size: 24px;
          margin-bottom: 24px;
          margin-top: 24px;
        }
        .duck-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 50px;

          .duck {
            height: 155px;
            width: 193px;
            border-radius: 30px;
            background-image: url("https://images.unsplash.com/photo-1582845512747-e42001c95638?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
            background-position: center;
            background-size: 300px;
          }
        }

        form {
          display: flex;
          flex-direction: column;
          align-items: center;

          .subtext {
            margin-top: 18px;
            margin-bottom: 16px;
            font-size: 12px;
            .register {
              margin-left: 2px;
              cursor: pointer;
              color: var(--blue);
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .login-box {
      display: flex;
      width: 720px;
      height: 562px;
      border: 2px solid var(--light-blue);
      border-radius: 25px;

      .image-container {
        display: block;
        width: 50%;
        height: 100%;
        background-image: url("https://images.unsplash.com/photo-1559304787-945aa4341065?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=641&q=80");
        background-position: center;
        background-size: cover;
        border-radius: 0 24px 24px 0;
        border-left: 0.5px #9c9c9c solid;
      }

      .flex {
        width: 50%;
      }
    }
  }
`;
