import styled from "styled-components";

export const FormaRecover = styled.div`
  position: absolute;
  z-index: 100;
  height: auto;
  width: auto;
  bottom: 0;
  right: 0;
  img {
    width: 70%;
    margin-left: 30%;
  }
  @media screen and (max-width: 990px) {
    display: none;
  }

  @media screen and (max-width: 1550px) {
    img {
      width: 50%;
      margin-left: 50%;
    }
  }
  @media screen and (max-width: 1200px) {
    img {
      width: 30%;
      margin-left: 70%;
    }
  }
`;
