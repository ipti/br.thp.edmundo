import { Accordion, AccordionTab } from "primereact/accordion"
import { Button } from "primereact/button"
import { useContext } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ContentPage from "../../../Components/ContentPage"
import { Column, Padding, Row } from "../../../Styles/styles"
import { OneModulesContextType } from "../type"
import OneModuleProvider, { OneModuleContext } from "./context/context"
import Icon from "../../../Components/Icon"
import { Divider } from "primereact/divider"

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
            <Padding padding="16px" />
            <Row id="space-between">
                <h2>Aulas</h2>
                <Button label="Adicionar aulas" icon={'pi pi-plus'} onClick={() => { history("/aulas/" + id + "/criar" ) }} />
            </Row>
            <Padding padding="16px" />
            <Accordion activeIndex={0}>
                {moduleOneContext.moduleOne?.classes.map((item, index) => {
                    return (
                        <AccordionTab header={item.name}>
                            <Row>
                                <h4 className="m-0">
                                    Objetivo:
                                </h4>
                                <Padding />
                                <p className="m-0">
                                    {item.objective}
                                </p>
                            </Row>
                            <Padding padding="8px" />
                            <Row>
                                <h4 className="m-0">
                                    Material necessario:
                                </h4>
                                <Padding />

                                <p className="m-0">
                                    {item.necessary_material}
                                </p>
                            </Row>
                            <Padding padding="8px" />
                            <Row >
                                <h4>Duração da aula: </h4>
                                <Padding />

                                <p className="m-0">
                                    {item.duration}h
                                </p>
                            </Row>
                            <Padding padding="8px" />
                            <Divider />
                            <h4>Atividades</h4>
                            <Padding padding="8px" />
                            {item.activities.map((activities) => {
                                return (
                                    <Row style={{ gap: "8px", marginBottom: 8 }}>
                                        <Icon icon="pi pi-book" />
                                        <Column id="center">
                                            <Link style={{ fontWeight: "bold" }} to={""}>{activities.name}</Link>
                                        </Column>
                                    </Row>
                                )
                            })}
                            <Padding padding="8px" />
                            <Button icon={"pi pi-plus"} label="Adicionar atividade" onClick={() => { history("/atividades/" + item.id + "/criar/" + id) }} />
                        </AccordionTab>
                    )
                })}
            </Accordion>
            <Padding padding="32px" />
        </ContentPage>
    )
}

export default ModuleOne