import styled from "styled-components";
import styles from "../../../Styles";

interface PropsActive {
    active: boolean
}

export const Text = styled.h3<PropsActive>`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    color:  ${props => props.active ? styles.colors.colorNavyBlue : styles.colors.colorNavyBlue};
`;


export const Container = styled.div<PropsActive>`
cursor: pointer;
border-radius: ${props => props.active ? "8px" : "0"};
width: 100%;
    &:hover{
        border-radius: 8px;
        background-color: ${styles.colors.colorNavyBlue};
        color: ${styles.colors.gray};
    }
`;