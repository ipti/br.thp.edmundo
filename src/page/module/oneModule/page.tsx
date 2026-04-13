import { Accordion, AccordionTab } from "primereact/accordion"
import { ConfirmDialog } from "primereact/confirmdialog"
import { Divider } from "primereact/divider"
import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import activitiesIcon from "../../../assets/image/activities.svg"
import ButtonComponent from "../../../Components/Button"
import ContentPage from "../../../Components/ContentPage"
import Empty from "../../../Components/Empty"
import Icon from "../../../Components/Icon"
import color from "../../../Styles/colors"
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
    const classesCount = moduleOneContext.moduleOne?.classes?.length ?? 0
    const activitiesCount =
        moduleOneContext.moduleOne?.classes?.reduce((total, item) => total + (item.activities?.length ?? 0), 0) ?? 0
    const moduleName = moduleOneContext.moduleOne?.name || "Módulo"
    const moduleDescription = moduleOneContext.moduleOne?.description || "Sem descrição cadastrada."

    return (
        <ContentPage title={moduleName} description={moduleDescription} >
            <div
                style={{
                    border: `1px solid ${color.colorBorderCard}`,
                    borderRadius: 14,
                    padding: 14,
                    background: "#FFFFFF",
                }}
            >
                <Row id="space-between" style={{ gap: 12, flexWrap: "wrap" }}>
                    <Row style={{ gap: 8, flexWrap: "wrap" }}>
                        <span
                            style={{
                                padding: "4px 10px",
                                borderRadius: 999,
                                background: "#EFF4FF",
                                color: color.colorPrimary,
                                fontSize: 12,
                                fontWeight: 700,
                                height: "fit-content"
                            }}
                        >
                            {classesCount} aulas
                        </span>
                        <span
                            style={{
                                padding: "4px 10px",
                                borderRadius: 999,
                                background: "#FFF4E9",
                                color: color.colorSecondary,
                                fontSize: 12,
                                fontWeight: 700,
                                height: "fit-content"
                            }}
                        >
                            {activitiesCount} atividades
                        </span>
                    </Row>
                    <ButtonComponent
                        icon="pi pi-pencil"
                        label="Editar módulo"
                        onClick={() => {
                            history("/modulos/" + id + "/editar");
                        }}
                    />
                </Row>
            </div>
            <Padding padding="20px" />
            <Row id="space-between" style={{ alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <Column>
                    <h2 style={{ margin: 0 }}>Aulas</h2>
                    <p style={{ margin: "6px 0 0 0", color: color.colorsBaseInkLight }}>
                        Expanda uma aula para visualizar objetivos e atividades.
                    </p>
                </Column>
                <ButtonComponent label="Adicionar aula" icon={'pi pi-plus'} onClick={() => { history("/aulas/" + id + "/criar") }} />
            </Row>
            <Padding padding="16px" />
            {classesCount > 0 ? <Accordion activeIndex={0}>
                {moduleOneContext.moduleOne?.classes.map((item) => {
                    return (
                        <AccordionTab
                            key={item.id}
                            headerTemplate={<Column style={{ width: "100%" }}>
                                <Row style={{ width: "100%", gap: 12 }} id="space-between">
                                    <Column>
                                        <h3 style={{ margin: 0, lineHeight: "22px" }}>{item.name}</h3>
                                        <Padding padding="6px" />
                                        <Row style={{ gap: 8, flexWrap: "wrap" }}>
                                            <span
                                                style={{
                                                    padding: "3px 8px",
                                                    borderRadius: 999,
                                                    background: "#EFF4FF",
                                                    color: color.colorPrimary,
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {item.duration}h
                                            </span>
                                            <span
                                                style={{
                                                    padding: "3px 8px",
                                                    borderRadius: 999,
                                                    background: "#FFF4E9",
                                                    color: color.colorSecondary,
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {item.activities?.length ?? 0} atividades
                                            </span>
                                        </Row>
                                    </Column>
                                    <Row style={{ gap: 16, alignItems: "center" }}><div onClick={(e) => {
                                        e.stopPropagation()
                                        history("/aulas/" + id + "/editar/" + item.id)
                                    }}>
                                        <Icon icon="pi pi-pencil" /></div><div onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation(); setVisibleClasses(item)
                                        }}><Icon icon="pi pi-trash" /></div>
                                    </Row>
                                </Row>
                            </Column>
                            }>
                            <div
                                style={{
                                    border: `1px solid ${color.colorBorderCard}`,
                                    borderRadius: 10,
                                    padding: 12,
                                    background: "#FAFCFF",
                                }}
                            >
                                <Row style={{ alignItems: "flex-start", gap: 6 }}>
                                    <h4 style={{ margin: 0, minWidth: 128 }}>
                                        Objetivo:
                                    </h4>
                                    <p style={{ margin: 0 }}>
                                        {item.objective || "Sem objetivo cadastrado"}
                                    </p>
                                </Row>
                                <Padding padding="8px" />
                                <Row style={{ alignItems: "flex-start", gap: 6 }}>
                                    <h4 style={{ margin: 0, minWidth: 128 }}>
                                        Material necessário:
                                    </h4>
                                    <p style={{ margin: 0 }}>
                                        {item.necessary_material || "Sem material informado"}
                                    </p>
                                </Row>
                            </div>
                            <Padding padding="8px" />
                            <Divider />
                            <h4>Atividades</h4>
                            <Padding padding="8px" />
                            {item.activities.length > 0 ? item.activities.map((activities) => {
                                return (
                                    <Column key={activities.id}>
                                        <div
                                            style={{
                                                border: `1px solid ${color.colorBorderCard}`,
                                                borderRadius: 10,
                                                padding: 12,
                                                marginBottom: 8,
                                                background: "#FFFFFF",
                                            }}
                                        >
                                            <Row id="space-between" style={{ gap: "8px", alignItems: "center" }}>
                                                <Row style={{ gap: 8, flex: 1 }}>
                                                    <img src={activitiesIcon} alt={activities.name} />
                                                    <Column>
                                                        <h3 style={{ margin: 0, fontWeight: "bold", cursor: "pointer" }} onClick={() => history("/atividades/" + activities.id)}>{activities.name}</h3>
                                                        <Padding padding="4px" />
                                                        <Row style={{ gap: 8, flexWrap: "wrap" }}>
                                                            <span
                                                                style={{
                                                                    padding: "3px 8px",
                                                                    borderRadius: 999,
                                                                    background: "#EFF4FF",
                                                                    color: color.colorPrimary,
                                                                    fontSize: 11,
                                                                    fontWeight: 700,
                                                                }}
                                                            >
                                                                {activities.type_activities}
                                                            </span>
                                                            <span
                                                                style={{
                                                                    padding: "3px 8px",
                                                                    borderRadius: 999,
                                                                    background: "#EAF8EF",
                                                                    color: color.green,
                                                                    fontSize: 11,
                                                                    fontWeight: 700,
                                                                }}
                                                            >
                                                                {activities.points_activities} pts
                                                            </span>
                                                            <span
                                                                style={{
                                                                    padding: "3px 8px",
                                                                    borderRadius: 999,
                                                                    background: "#FFF4E9",
                                                                    color: color.colorSecondary,
                                                                    fontSize: 11,
                                                                    fontWeight: 700,
                                                                }}
                                                            >
                                                                {activities.time_activities} min
                                                            </span>
                                                        </Row>
                                                    </Column>
                                                </Row>
                                                <Row style={{ gap: 12 }}>
                                                    <div style={{ cursor: "pointer" }} onClick={() => history("/atividades/" + activities.id)}>
                                                        <Icon icon="pi pi-external-link" />
                                                    </div>
                                                    <div style={{ cursor: "pointer" }} onClick={() => setVisibleActivities(activities)}>
                                                        <Icon icon="pi pi-trash" />
                                                    </div>
                                                </Row>
                                            </Row>
                                        </div>
                                    </Column>
                                )
                            }) : (
                                <p style={{ color: color.colorsBaseInkLight }}>Nenhuma atividade cadastrada nesta aula.</p>
                            )}
                            <Padding padding="8px" />
                            <ButtonComponent icon={"pi pi-plus"} label="Adicionar atividade" onClick={() => { history("/atividades/" + item.id + "/criar/" + id) }} />
                        </AccordionTab>
                    )
                })}
            </Accordion> : <Empty title="Aulas" />}
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
