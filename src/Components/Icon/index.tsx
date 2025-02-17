import { MouseEventHandler } from "react";



const Icon = ({icon, size, color, fontWeight, cursor, onClick}: { icon: string, size?: string, color?: string, fontWeight?: string, cursor?: "pointer" | undefined, onClick?: MouseEventHandler<HTMLElement> | undefined}) => {
    return(
        <i className={icon} onClick={onClick} style={{ fontSize: size || '1.5rem', color: color, fontWeight: fontWeight, cursor: cursor  }}  />
    )
}

export default Icon;