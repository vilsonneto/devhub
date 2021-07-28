import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: ${(props) => (props.noMenu ? "center" : "space-between")};
  align-items: center;
  height: 68px;

  .logo {
    margin-left: 17px;
    font-size: 25px;
    cursor: pointer;

    .logo-kenzie {
      color: var(--blue);
      font-family: "Ubuntu", sans-serif;
    }

    .logo-hub {
      color: var(--matte-black);
    }
  }

  .menu {
    margin-right: 23px;
    font-size: 20px;
    display: ${(props) => (props.noMenu ? "none" : "block")};

    .login {
      color: var(--matte-black);
      margin-right: 5px;
    }
    span {
      color: var(--matte-black);
      font-weight: 100;
    }
    .register {
      color: var(--blue);
      margin-left: 5px;
    }
  }

  .exit {
    margin-right: 23px;
    cursor: pointer;
    color: var(--matte-black);
    font-size: 20px;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    .logo {
      margin-left: 51px;
    }
    .menu {
      display: block;
      margin-right: 42px;
    }

    .exit {
      margin-right: 42px;
    }
  }
`;
