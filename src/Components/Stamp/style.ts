import styled from "styled-components";

import stamp from '../../assets/image/stamp.svg'

export const StampStyle = styled.div`
    background: url(${stamp});
    background-repeat: no-repeat;
    background-size: 100%;
    /* background-position: right top; */
    height: 90px;
    width: 90px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 32px;
        height: 32px;
    }
`;