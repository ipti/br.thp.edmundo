

const Icon = ({icon, size, color, fontWeight}: { icon: string, size?: string, color?: string, fontWeight?: string}) => {
    return(
        <i className={icon} style={{ fontSize: size || '1.5rem', color: color, fontWeight: fontWeight }}  />
    )
}

export default Icon;