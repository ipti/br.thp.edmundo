import { Button } from "primereact/button"
import ContentPage from "../../../Components/ContentPage"
import { Row } from "../../../Styles/styles"
import { useNavigate } from "react-router-dom"

const ModuleList = () => {
    return (
        <ModuleListPage />
    )
}

const ModuleListPage = () => {

    const history = useNavigate()
    return (
        <ContentPage title="Modulos adicionados" description="Listar modules ">
            <Row id="end">
                <Button label="Criar module" onClick={() => { history('/modulos/criar') }} />
            </Row>
            <div>

            </div>
        </ContentPage>
    )
}

export default ModuleList;