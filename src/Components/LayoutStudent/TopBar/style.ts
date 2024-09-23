import styled from "styled-components";
import styles from "../../../Styles";
import typography from "../../../Styles/typography";
import color from "../../../Styles/colors";


export const Container = styled.div`

   display: flex;   
   flex-direction: row;
   height: 128px;
   justify-content: space-around;
   padding: 10px;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);

   .iconResponsive {
      @media screen and (min-width: 750px) {
        display: none ;
    }
   }
`;

export const Back = styled.div`
   display: flex;   
   flex-direction: row;
   align-items: center;
   cursor: pointer;
   font-family: ${styles.typography.types.inter};
   :hover{
      color: ${styles.colors.colorNavyBlue}
   }
`;


interface TextHeaderType {
   isActive: boolean
}

export const TextHeader = styled.div<TextHeaderType>`

color: ${props => props.isActive ? "black" : color.grayOne};
cursor: pointer;
  font-family: ${typography.types.regular};
font-size: 22px;
font-weight: bold;
line-height: 22px;
text-align: "justified";

`;