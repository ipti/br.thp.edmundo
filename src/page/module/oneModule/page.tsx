import { Button } from "primereact/button"
import { useContext } from "react"
import ContentPage from "../../../Components/ContentPage"
import { Padding, Row } from "../../../Styles/styles"
import { OneModulesContextType } from "../type"
import OneModuleProvider, { OneModuleContext } from "./context/context"
import { useNavigate, useParams } from "react-router-dom"
import { Accordion, AccordionTab } from "primereact/accordion"

const ModuleOne = () => {
    return (
        <OneModuleProvider>
            <ModuleOnePage />
        </OneModuleProvider>
    )
}


const ModuleOnePage = () => {

    const { id } = useParams()

    const moduleOneContext = useContext(OneModuleContext) as OneModulesContextType

    const history = useNavigate()

    return (
        <ContentPage title={moduleOneContext.moduleOne?.name!} description={moduleOneContext.moduleOne?.description!} >
            <Padding padding="32px" />
            <Row id="space-between">
                <h2>Aulas</h2>
                <Button label="Adicionar aulas" icon={'pi pi-plus'} onClick={() => { history("/aulas/" + id + "/criar") }} />
            </Row>
            <Padding padding="16px" />
            <Accordion activeIndex={0}>
                {moduleOneContext.moduleOne?.classes.map((item, index) => {
                    return (
                        <AccordionTab header={item.name}>
                            <p className="m-0">
                                {item.objective}
                            </p>
                        </AccordionTab>
                    )
                })}
            </Accordion>
        </ContentPage>
    )
}

export default ModuleOne