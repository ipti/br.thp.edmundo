import styled from "styled-components";
import styles from "../../../Styles";
import typography from "../../../Styles/typography";
import color from "../../../Styles/colors";


export const Container = styled.div`

   display: flex;   
   flex-direction: row;
   min-height: 96px;
   justify-content: space-around;
   padding: 10px 16px;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
   gap: 8px;

   .iconResponsive {
      @media screen and (min-width: 750px) {
        display: none ;
    }
   }

   @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
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
font-size: 18px;
font-weight: bold;
line-height: 22px;
text-align: "justified";
padding: 6px 2px;

&:hover {
  color: ${color.colorPrimary};
}

`;
