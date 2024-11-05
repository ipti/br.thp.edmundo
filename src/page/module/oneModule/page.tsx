import { Accordion, AccordionTab } from "primereact/accordion"
import { Button } from "primereact/button"
import { ConfirmDialog } from "primereact/confirmdialog"
import { Divider } from "primereact/divider"
import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import activitiesIcon from "../../../assets/image/activities.svg"
import ContentPage from "../../../Components/ContentPage"
import Icon from "../../../Components/Icon"
import { Column, Padding, Row } from "../../../Styles/styles"
import { Activity, OneModulesContextType } from "../type"
import OneModuleProvider, { OneModuleContext } from "./context/context"


const ModuleOne = () => {
    return (
        <OneModuleProvider>
            <ModuleOnePage />
        </OneModuleProvider>
    )
}


const ModuleOnePage = () => {

    const [visibleActivities, setVisibleActivities] = useState<Activity | undefined>()
    const [visibleClasses, setVisibleClasses] = useState<any | undefined>()


    const { id } = useParams()

    const moduleOneContext = useContext(OneModuleContext) as OneModulesContextType

    const history = useNavigate()

    return (
        <ContentPage title={moduleOneContext.moduleOne?.name!} description={moduleOneContext.moduleOne?.description!} >
            <Row id="end">
                <Button
                    icon="pi pi-pencil"
                    onClick={() => {
                        history("/modulos/" + id + "/editar");
                    }}
                />
            </Row>
            <Padding padding="16px" />
            <Row id="space-between">
                <h2>Aulas</h2>
                <Button label="Adicionar aulas" icon={'pi pi-plus'} onClick={() => { history("/aulas/" + id + "/criar") }} />
            </Row>
            <Padding padding="16px" />
            <Accordion activeIndex={0}>
                {moduleOneContext.moduleOne?.classes.map((item, index) => {
                    return (
                        <AccordionTab
                            key={index}
                            headerTemplate={<Column style={{ height: "36px", width: "100%" }} id="center">
                                    <Row style={{ width: "100%" }} id="space-between">
                                        <div>
                                            <h2>{item.name}</h2>
                                        </div>
                                        <Row style={{ gap: 16 }}><div onClick={(e) => { 
                                            history("/aulas/" + id + "/editar/" + item.id) }}>
                                            <Icon icon="pi pi-pencil" /></div><div onClick={(e) => { 
                                                e.preventDefault()
                                                e.isPropagationStopped()
                                                e.stopPropagation(); setVisibleClasses(item) }}><Icon icon="pi pi-trash" /></div>
                                        </Row>
                                    </Row>
                            </Column>
                            }>
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
                                    <Column>
                                        <Row id="space-between" style={{ gap: "8px", marginBottom: 8, padding: "0 16px" }}>
                                            <Row style={{ gap: 8 }}>
                                                <img src={activitiesIcon} alt={activities.name} />
                                                <Column id="center">
                                                    <h3 style={{ fontWeight: "bold", cursor: "pointer" }} onClick={() => history("/atividades/" + activities.id)}>{activities.name}</h3>
                                                </Column>
                                            </Row>
                                            <div style={{ cursor: "pointer" }} onClick={() => setVisibleActivities(activities)}>

                                                <Icon icon="pi pi-trash" />
                                            </div>
                                        </Row>
                                        <Divider />

                                    </Column>
                                )
                            })}
                            <Padding padding="8px" />
                            <Button icon={"pi pi-plus"} label="Adicionar atividade" onClick={() => { history("/atividades/" + item.id + "/criar/" + id) }} />
                        </AccordionTab>
                    )
                })}
            </Accordion>
            <Padding padding="32px" />
            <ConfirmDialog
                visible={!!visibleActivities}
                onHide={() => setVisibleActivities(undefined)}
                message="Tem certeza de que deseja prosseguir?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={() => moduleOneContext.DeleteActivities(visibleActivities?.id!)}
                reject={() => setVisibleActivities(undefined)}
            />

            <ConfirmDialog
                visible={!!visibleClasses}
                onHide={() => setVisibleClasses(undefined)}
                message="Tem certeza de que deseja prosseguir?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={() => moduleOneContext.DeleteClasses(visibleClasses?.id!)}
                reject={() => setVisibleClasses(undefined)}
            />
        </ContentPage>
    )
}

export default ModuleOne