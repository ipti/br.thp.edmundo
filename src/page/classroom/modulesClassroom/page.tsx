import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { InputSwitch } from "primereact/inputswitch"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import ContentPage from "../../../Components/ContentPage"
import Icon from "../../../Components/Icon"
import color from "../../../Styles/colors"
import { Column, Padding, Row } from "../../../Styles/styles"
import ClassroomModulesProvider, { ClassroomModulesContext } from "./context/context"
import { Class } from "./context/type"
import ModalAddModule from "./modalAddModule"
import Empty from "../../../Components/Empty"


const ClassroomModules = () => {
    return (
        <ClassroomModulesProvider>
            <ClassroomModulesPage />
        </ClassroomModulesProvider>
    )
}

const ClassroomModulesPage = () => {
    const props = useContext(ClassroomModulesContext)
    const [visible, setVisible] = useState(false)
    return (
        <ContentPage title="Módulos da turma" description="Gerencie os módulos, aulas e atividades da turma">
            <Padding padding="16px" />
            <Button label="Adicionar módulo" icon="pi pi-plus" onClick={() => setVisible(!visible)} />
            <Padding padding="16px" />
            {props?.modulesClassroomList?.map((item) => {
                return (
                    <div className="card">
                        <Padding />
                        <Row id="space-between">
                            <Column id="center">
                                <h2>{item.name}</h2>
                                <Padding />
                            </Column>
                            <Column>
                                <InputSwitch
                                    tooltip={item.classroom_module[0]?.active ? "Remover Módulo" : "Disponibilizar Módulo"}
                                    tooltipOptions={{ position: "bottom" }}
                                    checked={item.classroom_module[0]?.active} onChange={(e) => { props.UpdateModuleClassroom({ active: !item.classroom_module[0]?.active }, item.classroom_module[0].id) }} />
                            </Column>
                        </Row>
                        <Padding />
                        {item.classroom_module[0]?.active && <div>
                            <Divider />
                            {item.classes.map((classes) => {
                                return <ListActivities classes={classes} />
                            })}
                        </div>}
                    </div>
                )
            })}

            {props?.modulesClassroomList?.length === 0 && <Empty title="módulos" />}
            <ModalAddModule onHide={() => setVisible(!visible)} visible={visible} />
        </ContentPage >
    )
}

const ListActivities = ({ classes }: { classes: Class }) => {
    const props = useContext(ClassroomModulesContext)
    const { id } = useParams()
    const [activeClasses, setActiveClasses] = useState(false)

    return (
        <Padding padding="16px">

            <Row id="space-between">
                <Row style={{ cursor: "pointer" }} onClick={() => setActiveClasses(!activeClasses)}>

                    <Column id="center">
                        <Icon  color={!classes.classroom_classes[0]?.active ?  color.colorFourth : "black"} icon={(activeClasses && classes.classroom_classes[0]?.active) ? "pi pi-chevron-up" : "pi pi-chevron-down"} size="16px" />
                    </Column>
                    <Padding />
                    <Column id="center">
                        <h4 style={{ color: !classes.classroom_classes[0]?.active ?  color.colorFourth : "black" }}>
                            {classes.name}
                        </h4>
                    </Column>
                </Row>
                <Column>
                    <InputSwitch

                        tooltip={classes.classroom_classes[0]?.active ? "Remover Aula" : "Disponibilizar Aula"}
                        tooltipOptions={{ position: "bottom" }}
                        pt={{
                            slider: {

                                style: {
                                    backgroundColor: classes.classroom_classes[0]?.active ? color.colorSecondary : "#ced4da"
                                },


                            },
                        }} checked={classes.classroom_classes[0]?.active} onChange={(e) => classes.classroom_classes[0] ? props!.UpdateclasseClassroom({ active: !classes.classroom_classes[0]?.active }, classes.classroom_classes[0].id) : props!.AddclasseClassroom({ idClasse: classes.id, idClassroom: parseInt(id!) })} />
                </Column>
            </Row>
            {(activeClasses && classes.classroom_classes[0]?.active) && <div>
                <Padding padding="8px" />
                <Divider />

                {classes.activities.map((activities) => {
                    return (
                        <Padding padding="16px">
                            <Row id="space-between">
                                <Row>
                                    <Icon icon="pi pi-file" />
                                    <Padding />
                                    <Column id="center">
                                        {activities.name}
                                    </Column>
                                </Row>
                                <Column>
                                    <InputSwitch
                                        tooltip={activities.classroom_activities[0]?.active ? "Remover atividade" : "Disponibilizar atividade"}
                                        tooltipOptions={{ position: "bottom" }}
                                        pt={{
                                            slider: {

                                                style: {
                                                    backgroundColor: activities.classroom_activities[0]?.active ? color.colorThird : "#ced4da"
                                                },


                                            },
                                        }} checked={activities.classroom_activities[0]?.active} onChange={(e) => activities.classroom_activities[0] ? props!.UpdateActivitiesClassroom({ active: !activities.classroom_activities[0]?.active }, activities.classroom_activities[0].id) : props!.AddActivitiesClassroom({ idActivities: activities.id, idClassroom: parseInt(id!) })} />
                                </Column>
                            </Row>
                        </Padding>
                    )
                })}
            </div>}
        </Padding>
    )
}

export default ClassroomModules