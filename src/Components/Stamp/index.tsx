import { HoverContainer, StampStyle } from "./style"


const Stamp = ({ url, description, type }: { url: string, description?: string, type: string }) => {
    console.log(type)
    return (
        <StampStyle type={type} >
            {/* <HoverDiv /> */}
            {description && <HoverContainer>
                <p>{description}</p>
            </HoverContainer>}
            <img src={url} alt="stamp" />
        </StampStyle>
    )
}

export default Stamp