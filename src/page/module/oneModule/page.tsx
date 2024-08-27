import { Button } from "primereact/button"
import { useContext } from "react"
import ContentPage from "../../../Components/ContentPage"
import { Padding, Row } from "../../../Styles/styles"
import { OneModulesContextType } from "../type"
import OneModuleProvider, { OneModuleContext } from "./context/context"
import { useNavigate } from "react-router-dom"

const ModuleOne = () => {
    return(
        <OneModuleProvider>
            <ModuleOnePage />
        </OneModuleProvider>
    )
}


const ModuleOnePage = () => {

    const moduleOneContext = useContext(OneModuleContext) as OneModulesContextType

    const history = useNavigate()

    return(
        <ContentPage title={moduleOneContext.moduleOne?.name!} description={moduleOneContext.moduleOne?.description!} >
            <Padding padding="32px" />
            <Row id="space-between">
                <h2>Aulas</h2>
                <Button label="Adicionar aulas" icon={'pi pi-plus'} onClick={() => {history("/aulas/criar")}} />
            </Row>
        </ContentPage>
    )
}

export default ModuleOne