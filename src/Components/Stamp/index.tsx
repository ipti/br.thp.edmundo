import { StampStyle } from "./style"


const Stamp = ({url}:{url: string}) => {
    return(
        <StampStyle>
            <img src={url}  alt="stamp" />
        </StampStyle>
    )
}

export default Stamp