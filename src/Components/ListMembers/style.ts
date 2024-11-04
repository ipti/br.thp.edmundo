import styled from "styled-components";
import color from "../../Styles/colors";

export const UserStyled = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    padding: 8px;
    &:hover{
        background-color: ${color.colorBorderCard};
    }
`