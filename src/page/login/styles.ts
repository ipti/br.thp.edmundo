import styled from "styled-components";
import typography from "../../Styles/typography";
import color from "../../Styles/colors";
import styles from "../../Styles";

export const BackgroundTopLeft = styled.div`
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 100;
    
`;


export const BackgroundBottomRight = styled.div`
    background-position: center right;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 100;
    
`;

export const ContainerLogin = styled.div`
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

  .imgBack {
    height: 100%;
    font-size: ${typography.font.small};
    color: ${color.white};
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    position: fixed;
    border-bottom-left-radius: 40px;
    border-top-left-radius: 40px;
  }

  .formSignUp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 100;
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

  .pLogin {
    font-family: ${styles.typography.types.inter};
    font-size: 16.25px;
    font-weight: 500;
    line-height: 20.9px;
    text-align: left;
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

  #margin {
    margin: 20px;
    position: absolute;
  }

  #resetPassword {
    color: ${color.grayClear};
    font-size: ${typography.font.small};
    margin-top: 30;
    margin-bottom: 30;
    width: 100%;
  }
  #textCenter {
    text-align: "center";
  }
  #link {
    font-family: ${typography.types.bold};
    color: ${color.gray};
    text-decoration: none;
    margin-left: 20;
  }
`;
export const TopColors = styled.div<{ color: string }>`
  width: 25%;
  height: 4px;
  background: ${(props) => props.color};
`;
