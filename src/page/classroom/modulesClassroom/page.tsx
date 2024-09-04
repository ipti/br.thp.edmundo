import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { SelectButton } from "primereact/selectbutton"
import { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ContentPage from "../../../Components/ContentPage"
import { Column, Padding, Row } from "../../../Styles/styles"
import ClassroomModulesProvider, { ClassroomModulesContext } from "./context/context"
import ModalAddModule from "./modalAddModule"
import Icon from "../../../Components/Icon"
import { InputSwitch } from "primereact/inputswitch"


const ClassroomModules = () => {
    return (
        <ClassroomModulesProvider>
            <ClassroomModulesPage />
        </ClassroomModulesProvider>
    )
}

const ClassroomModulesPage = () => {
    const props = useContext(ClassroomModulesContext)
    const { id } = useParams()
    const [visible, setVisible] = useState(false)
    const options2 = [
        { name: 'Ativado', value: true },
        { name: 'Desativado', value: false }
    ];
    return (
        <ContentPage title="Módulos da turma" description="Gerencie os módulos, aulas e atividades da turma">
            <Padding padding="16px" />
            <Button label="Adicionar módulo" icon="pi pi-plus" onClick={() => setVisible(!visible)} />
            <Padding padding="16px" />
            {props?.modulesClassroomList?.map((item) => {
                return (
                    <div>
                        <Row id="space-between">
                            <Column id="center">
                                <h2>{item.name}</h2>
                                <Padding />
                            </Column>
                            <Column>
                                <InputSwitch checked={true} onChange={(e) => { }} />
                            </Column>
                        </Row>
                        <Padding />
                        <Row>
                            <Column id="center">
                                <Icon icon="pi pi-chevron-down" size="16px" />
                            </Column>
                            <Padding />
                            <h3>Aulas</h3>
                        </Row>
                        <Padding padding="8px" />
                        <Column>
                            {item.classes.map((classes) => {
                                return (
                                    <Column>
                                        <Row id="space-between">
                                            <Row>
                                                <Padding padding="8px" />
                                                <Column id="center">
                                                    <Icon icon="pi pi-chevron-down" size="16px" />
                                                </Column>
                                                <Padding />
                                                <h4>
                                                    {classes.name}
                                                </h4>
                                                <Column>
                                                    <InputSwitch checked={true} onChange={(e) => { }} />
                                                </Column>
                                            </Row>
                                        </Row>
                                        {classes.activities.map((activities) => {
                                            return(
                                                <>
                                                  
                                                </>
                                            )
                                        })}
                                    </Column>
                                )
                            })}
                        </Column>
                        <Divider />
                    </div>
                )
            })}
            {/* <ModalAddModule onHide={() => setVisible(!visible)} visible={visible} /> */}
        </ContentPage >
    )
}

export default ClassroomModules