import styled from "styled-components";
import styles from "../../../Styles";


export const Container = styled.div`

   display: flex;   
   flex-direction: row;
   height: 70px;
   justify-content: space-between;
   padding: 10px;

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