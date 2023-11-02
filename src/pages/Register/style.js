import styled from "styled-components";

export const RegisterContainer = styled.div`

  .register-box {
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

        form {
          display: flex;
          flex-direction: column;
          align-items: center;

          .subtext {
            margin-top: 18px;
            margin-bottom: 16px;
            font-size: 12px;
            .login {
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
    height: 80vh;

    .register-box {
      display: flex;
      width: 720px;
      height: 770px;
      border: 2px solid var(--baby-blue);
      border-radius: 25px;

      .image-container {
        display: block;
        width: 50%;
        height: 100%;
        background-image: url("https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80");
        background-position: center;
        background-size: cover;
        border-radius: 24px 0 0 24px;
        border-right: 0.5px #9c9c9c solid;
        p {
          width: 268px;
          font-size: 28px;
          font-weight: 300;
          margin-left: 46px;
          margin-top: 27px;
        }
      }

      .flex {
        width: 50%;
      }
    }
  }
`;
