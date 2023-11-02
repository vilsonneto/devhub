import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  .presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 25px;

    div {
      margin-top: 48px;
      margin-bottom: 62px;
      width: 286px;

      .hero {
        color: var(--matte-black);
        font-size: 50px;
        font-weight: 400;
        margin-bottom: 36px;
      }

      .description {
        color: var(--blue);
        font-size: 16px;
        font-weight: bold;
        width: 266px;
      }
    }
  }

  @media (min-width: 668px) {
    .presentation {
      div {
        margin-top: 95px;
        margin-bottom: 29px;
        width: 464px;

        .hero {
          font-size: 64px;
          margin-bottom: 19px;
        }

        .description {
          font-size: 18px;
          width: 100%;
        }
      }
    }

    .image-frame {
      display: flex;
      height: 498px;
      justify-content: center;
      align-items: center;

      .image-container {
        position: relative;
        background-image: url("https://images.unsplash.com/photo-1582845512747-e42001c95638?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
        background-position: center;
        background-size: cover;
        border-radius: 50px;
        height: 345px;
        width: 458px;

        &:before {
          content: "";
          border-radius: 50px;
          display: block;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgb(0 185 185 / 10%);
        }
      }
    }

    @media (min-width: 1180px) {
      height: 90vh;
      flex-direction: row;
      .presentation {
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 50%;
        div {
          margin-top: 63px;
          margin-bottom: 57px;
          width: 464px;

          .hero {
            font-size: 64px;
            margin-bottom: 11px;
          }

          .description {
            font-size: 18px;
            width: 100%;
          }
        }
      }

      .image-frame {
        height: 100%;
        width: 50%;
        display: flex;
        height: 498px;
        justify-content: center;
        align-items: center;

        .image-container {
          margin-top: 57px;

          border-radius: 50px;
          height: 430px;
          width: 571px;
        }
      }
    }
  }
`;
