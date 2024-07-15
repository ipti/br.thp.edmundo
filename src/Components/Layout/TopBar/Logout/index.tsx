import { logout } from "../../../../service/localstorage";
import { Padding } from "../../../../Styles/styles";
import { Container } from "./style";


const LogoutTopBar = () => {
    return (
        <Container onClick={() => { logout(); window.location.reload() }}>
            <div className="flex flex-row">
                <i className="pi pi-sign-out"></i>
                <Padding padding="2px" />
                <div>Sair</div>
            </div>
        </Container>

    )
}

export default LogoutTopBar;