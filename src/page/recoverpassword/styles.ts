import styled from "styled-components";

export const FormaRecover = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 100;
  height: auto;
  width: auto;
  margin-bottom: -12px;
  @media screen and (max-width: 990px) {
    display: none;
  }
  @media screen and (max-width: 1350px) {
    img {
      width: 80%;
      margin-left: 20%;
    }
  }
  @media screen and (max-width: 1200px) {
    img {
      width: 70%;
      margin-left: 30%;
    }
  }
`;

