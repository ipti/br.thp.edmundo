import styled from "styled-components";

export const FormaSignUp = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
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
    }
  }
`;

