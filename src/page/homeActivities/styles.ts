import styled from "styled-components";
import typography from "../../Styles/typography";
import color from "../../Styles/colors";

export const TextActivities = styled.div`

h1 {
  font-family: ${typography.types.regular};

}
  font-family: ${typography.types.regular};
  font-size: 22px;
  font-weight: bold;
  gap: 8;
  line-height: 22px;
  text-align: "justified";
p {
  font-family: ${typography.types.regular};
  font-size: 22px;
  font-weight: 400;
  line-height: 22px;
  text-align: "justified";
}

`;

interface ButtonStartType {
  type?: "PRIMARY" | "SUCCESS"
}

export const ButtonStart = styled.div<ButtonStartType>`
  padding: 16px;
  width: auto;
  color: white;
  background-color: ${props => props.type === "PRIMARY" ? color.colorPrimary: props.type === "SUCCESS" ? color.green : color.colorPrimary};
  border-radius: 27px;
  font-family: ${typography.types.regular};
  font-size: 30.34px;
  font-weight: 700;
  line-height: 26.14px;
  text-align: left;
cursor: ${props => props.type === "PRIMARY" ? "pointer": props.type === "SUCCESS" ? "" : "pointer"};

`;

export const TextActivitiesParagraph = styled.div`
  font-family: ${typography.types.regular};
font-size: 22px;
font-weight: 400;
line-height: 22px;
text-align: "justified";

`;

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

