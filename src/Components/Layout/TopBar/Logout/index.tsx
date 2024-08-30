import { Button } from "primereact/button";
import { logout } from "../../../../service/localstorage";
import { Container } from "./style";


const LogoutTopBar = () => {
    return (
        <Container onClick={() => { logout(); window.location.reload() }}>
            <Button label="Sair" icon="pi pi-sign-out" />
            {/* <div className="flex flex-row">
                <i className="pi pi-sign-out"></i>
                <Padding padding="2px" />
                <div>Sair</div>
            </div> */}
        </Container>

    )
}

export default LogoutTopBar;