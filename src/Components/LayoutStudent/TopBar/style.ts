import styled from "styled-components";
import styles from "../../../Styles";


export const Container = styled.div`

   display: flex;   
   flex-direction: row;
   height: 128px;
   justify-content: space-around;
   padding: 10px;
   box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

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