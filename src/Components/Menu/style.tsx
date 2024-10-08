import styled from "styled-components";
import styles from "../../Styles";


interface PropsActive {
    active: boolean
}

export const Container = styled.div<PropsActive>`
    background-color: ${styles.colors.colorsBaseMenu};
    min-width: 256px;
    @media screen and (max-width: 1080px) {
        display: ${(props: any) => props.active ? "" : "none" };
    }
`;

export const TopBar = styled.div`
    width: 25%;
    height: 4px
`;