import styled from "styled-components";
import styles from "../../../Styles";

interface PropsActive {
    active: boolean
}

export const Text = styled.h3<PropsActive>`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    color:  ${props => props.active ? styles.colors.colorPrimary : styles.colors.colorPrimary};
    &:hover{
        color: ${styles.colors.grayClearOne};
    }
`;


export const Container = styled.div<PropsActive>`
cursor: pointer;
border-radius: ${props => props.active ? "8px" : "0"};
width: 100%;
    &:hover{
        border-radius: 8px;
        background-color: ${styles.colors.colorPrimary};
        color: ${styles.colors.grayClearOne};
    }
`;