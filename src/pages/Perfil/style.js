import styled from "styled-components";

export const PerfilContainer = styled.div`
  width: 100%;
  .header-perfil {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .image-box {
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      .image-perfil {
        background-image: url("https://images.unsplash.com/photo-1509828945144-552b3b1a968d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80");
        background-size: cover;
        background-position-y: center;
        border-radius: 50px;
        width: 70px;
        height: 70px;
      }
    }

    .info {
      width: 200px;
      text-align: center;

      .info-name {
        color: var(--matte-black);
        text-align: center;
      }
      .info-module {
        font-size: 17px;
        color: var(--blue);
        text-align: center;
        margin-bottom: 10px;
      }
      .info-contact {
        color: var(--blue);
        text-align: center;
        svg {
          font-size: 25px;
        }
      }
      .info-email {
        color: var(--blue);
        text-align: left;

        span {
          font-weight: bold;
          margin-right: 2px;
        }
      }
      .info-bio {
        text-align: left;
        margin: 10px auto;
        color: var(--matte-bleck);
        span {
          font-weight: bold;
          margin-right: 2px;
        }
      }
    }
  }
  .tech-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h3 {
      text-align: center;
    }
    .tech {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 10px;
      border: solid 1px var(--baby-blue);
      width: 80%;
      margin: 10px;
      padding: 7px;

      .tech-title {
        font-weight: bold;
      }
      .tech-status {
        margin-left: 5px;
      }

      button {
        font-size: 20px;

        background: transparent;
        border: none;
      }
    }
  }
`;
