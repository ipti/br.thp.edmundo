import styled from "styled-components";
import color from "../../Styles/colors";

interface UserStyledProps {
    isSelected?: boolean;
}

export const UserStyled = styled.div<UserStyledProps>`
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    padding: 8px;
    background-color: ${(props: UserStyledProps) => props.isSelected ? color.colorBorderCard : "transparent"};
    &:hover{
        background-color: ${color.colorBorderCard};
    }
`