import styled from "styled-components";
import typography from "../../Styles/typography";
import color from "../../Styles/colors";
import styles from "../../Styles";

export const BackgroundTopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  height: auto;
  width: auto;
  margin-top: 32px;
  margin-left: 32px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const BackgroundBottomRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 100;
  height: auto;
  width: auto;
  margin-right: 32px;
  margin-bottom: 32px;
  @media screen and (max-width: 800px) {
    display: none;
  }
  
`;

export const FormaLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  height: auto;
  width: auto;
  margin-bottom: -10px;
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 1350px) {
    img {
      width: 80%;
    }
  }
  @media screen and (max-width: 1080px) {
    img {
      width: 60%;
    }
  }
`;
export const PersonLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 200;
  height: auto;
  width: auto;
  margin-bottom: -10px;
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 1350px) {
    img {
      width: 80%;
    }
  }

  @media screen and (max-width: 1080px) {
    img {
      width: 60%;
    }
  }
`;
export const PersonRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 200;
  height: auto;
  width: auto;
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 1350px) {
    img {
      width: 80%;
      margin-left: 20%;
    }
  }

  @media screen and (max-width: 1080px) {
    img {
      width: 60%;
      margin-left: 40%;
    }
  }
`;

export const FormaRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  height: auto;
  width: auto;
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 1350px) {
    img {
      width: 80%;
      margin-left: 20%;
    }
  }

  @media screen and (max-width: 1080px) {
    img {
      width: 60%;
      margin-left: 40%;
    }
  }
`;

export const ContainerOut = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${typography.types.light};
  background-repeat: no-repeat;
  background: #F4F5F9;
  z-index: 0;


  background-position: right top;
  position: fixed;

  .TextLarge {
    font-family: ${styles.typography.types.bold};
    font-size: 45.85px;
    font-weight: 800;
    line-height: 46.54px;
    text-align: left;
  }

  .divBlue {
    background: linear-gradient(0deg, #2e62ac, #2e62ac);
    opacity: 0.6;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
    border-bottom-left-radius: 40px;
    border-top-left-radius: 40px;
  }


  .noAcesso {
    color: ${color.colorPrimary};
    z-index: 100;
    font-size: ${typography.font.small};
    font-family: ${typography.types.inter};
    padding-top: 40;
    padding-bottom: 40;
    margin-right: 20;
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 280px;
  }
  .buttonNoAcesso {
    margin-top: 30px;
    border-style: solid;
    border-width: 2px;
    border-radius: 25px;
    padding: 10px;
    font-family: ${typography.types.regular};
  }

  .link {
    font-family: ${typography.types.bold};
    color: ${color.colorPrimary};
    text-decoration: none;
    margin-left: 5px;
  }

  .linkSignUp {
    font-family: ${typography.types.inter};
    color: ${color.colorPrimary};
    text-decoration: none;
  }

  .titleLogin {
    text-align: center;
    margin-top: 64px;
    font-size: 64px;
    color: ${color.colorPrimary};
    font-family: ${typography.types.semiBold};
    font-weight: 800;
  }

  .resetPassword {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    font-family: ${typography.types.inter};
    color: ${color.colorPrimary};
  }

 
`;
export const TopColors = styled.div<{ color: string }>`
  width: 25%;
  height: 4px;
  background: ${(props) => props.color};
`;
