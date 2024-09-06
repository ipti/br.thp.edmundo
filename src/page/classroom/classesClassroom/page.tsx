import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { SelectButton } from "primereact/selectbutton"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ContentPage from "../../../Components/ContentPage"
import { Column, Padding, Row } from "../../../Styles/styles"
import ClassroomClasseProvider, { ClassroomClasseContext } from "./context/context"
import ModalAddModule from "./modalAddModule"


const ClassroomClasse = () => {
    return (
        <ClassroomClasseProvider>
            <ClassroomClassePage />
        </ClassroomClasseProvider>
    )
}

const ClassroomClassePage = () => {
    const props = useContext(ClassroomClasseContext)
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



            {props?.classeClassroomList?.map((item) => {
                return (
                    <div>
                        <h4>{item.module.name}</h4>
                        <Divider />
                        <Padding />

                        {item.module.classes.map((classes) => {
                            return (
                                <Row id="space-between">
                                    <Column id="center">
                                        <h4>{classes.name}</h4>
                                        <Link to={"/"}>
                                            Ver aulas
                                        </Link>
                                    </Column>
                                    <Column>
                                        <label>Ativar visualização</label>
                                        <Padding />
                                        <SelectButton value={classes.active} onChange={() => { props.UpdateclasseClassroom({ active: !item.active }, item.id) }} options={options2} optionLabel="name" />
                                    </Column>
                                </Row>
                            )
                        })}
                        <Divider />
                    </div>
                )
            })}
            <ModalAddModule onHide={() => setVisible(!visible)} visible={visible} />
        </ContentPage >
    )
}

export default ClassroomClasse