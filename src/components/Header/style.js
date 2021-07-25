import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
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

  @media (min-width: 768px) {
    .logo {
      margin-left: 51px;
    }
    .menu {
      margin-right: 42px;
    }
  }
`;
