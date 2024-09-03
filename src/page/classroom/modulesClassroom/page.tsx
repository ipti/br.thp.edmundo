import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { SelectButton } from "primereact/selectbutton"
import { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ContentPage from "../../../Components/ContentPage"
import { Column, Padding, Row } from "../../../Styles/styles"
import ClassroomModulesProvider, { ClassroomModulesContext } from "./context/context"
import ModalAddModule from "./modalAddModule"


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
                                <h4>{item.module.name}</h4>
                                <Padding />
                                <Link to={"/turma/" + id + "/aulas"}>
                                    Ver aulas
                                </Link>
                            </Column>
                            <Column>
                                <label>Ativar visualização</label>
                                <Padding />
                                <SelectButton value={item.active} onChange={() => { props.UpdateModuleClassroom({ active: !item.active }, item.id) }} options={options2} optionLabel="name" />
                            </Column>
                        </Row>
                        <Divider />
                    </div>
                )
            })}
            <ModalAddModule onHide={() => setVisible(!visible)} visible={visible} />
        </ContentPage >
    )
}

export default ClassroomModules