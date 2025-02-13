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

export const TextActivitiesCard = styled.div`
  h1 {
    font-family: ${typography.types.regular};
  }
  font-family: ${typography.types.regular};
  font-size: 16px;
  font-weight: bold;
  gap: 8;
  line-height: 22px;
  text-align: "justified";
  p {
    font-family: ${typography.types.regular};
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: "justified";
  }
`;

interface ButtonStartType {
  type?: "PRIMARY" | "SUCCESS";
}

export const ButtonStart = styled.div<ButtonStartType>`
  padding: 16px;
  width: auto;
  color: white;
  background-color: ${(props) =>
    props.type === "PRIMARY"
      ? color.colorPrimary
      : props.type === "SUCCESS"
      ? color.green
      : color.colorPrimary};
  border-radius: 27px;
  font-family: ${typography.types.regular};
  font-size: 30.34px;
  font-weight: 700;
  line-height: 26.14px;
  text-align: left;
  cursor: ${(props) =>
    props.type === "PRIMARY"
      ? "pointer"
      : props.type === "SUCCESS"
      ? ""
      : "pointer"};
`;

export const TextActivitiesParagraph = styled.div`
  font-family: ${typography.types.regular};
  font-size: 22px;
  font-weight: 400;
  line-height: 22px;
  text-align: "justified";
`;

export const TextActivitiesParagraphCard = styled.div`
  font-family: ${typography.types.regular};
  font-size: 16px;
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

export const RoboIA = styled.div`
  position: fixed;
  bottom: 10px; /* Distância do fundo */
  right: 10px; /* Distância da direita */
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  img {
    width: 128px;
    cursor: pointer;
  }
  &:hover {
    img {
      width: 130px;
    }
  }
`;

export const HoverContainer = styled.div`
  position: absolute;
  bottom: 100%;
  top: 16px;
  right: 132px;
  height: 42px;
  background-color: ${color.colorPrimary};
  width: auto;
  /* width: auto; */
  padding: 10px;
  /* border: 1px solid gray; */
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease-in-out;

  ${RoboIA}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;
