import { ReactNode } from "react";
import { Container, Padding } from "../../Styles/styles"

const ContentPage = ({ description, title, children }: { title: string, description: string, children: ReactNode }) => {
    return (
        <Container>
            <h1>{title}</h1>
            <Padding padding="8px" />
            <p>{description}</p>
            <Padding padding="8px" />
            {children}
        </Container>
    )
}

export default ContentPage;