import styled from "styled-components";

import stamp from '../../assets/image/stamp.svg'
import stampGold from '../../assets/image/stamp_gold.svg'

import color from "../../Styles/colors";

interface StampStyleType {
    type: string
}

export const StampStyle = styled.div<StampStyleType>`

    background: url(${props => props.type === "GOLD" ? stampGold : stamp});
    background-repeat: no-repeat;
    background-size: 100%;
    /* background-position: right top; */
    height: 90px;
    width: 90px;
    position: relative;
    display: inline-block;




    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 32px;
        height: 32px;
    }

    #tooltip {
        
    }
`;

export const HoverDiv = styled.div`
  width: 200px;
  height: 100px;
  background-color: lightblue;
  border: 1px solid blue;
`;

export const HoverContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${color.colorBlueClean};
  width: 256px;
  /* width: auto; */
  padding: 10px;
  /* border: 1px solid gray; */
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease-in-out;

  ${StampStyle}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const StampComponentStyle = styled.div`
    max-width: 90px;
    text-align: center;
`;