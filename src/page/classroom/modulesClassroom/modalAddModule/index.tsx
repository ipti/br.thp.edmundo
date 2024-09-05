import { Dialog } from "primereact/dialog"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import CheckboxComponent from "../../../../Components/Checkbox"
import { Column, Padding, Row } from "../../../../Styles/styles"
import { ClassroomModulesContext } from "../context/context"

const ModalAddModule = ({ onHide, visible }: { visible?: boolean | undefined, onHide(): void }) => {

    const { id } = useParams()

    const props = useContext(ClassroomModulesContext)
    return (
        <Dialog header="Adicionar Módulos" visible={visible}  onHide={onHide}>
             <Padding />
            <div style={{ gap: '16px' }} className="card">


                {props?.allModules?.map((item) => {
                    return (
                        <Column>
                            <Row style={{ width: "100%" }} id="space-between">
                                <Column id="center">
                                    {item.name}
                                </Column>
                                <Padding />
                                <CheckboxComponent checked={item.classroom_module[0] ? true : false}  onChange={() => { item.classroom_module[0] ? props.RemoveModuleClassroom({ idClassroom: parseInt(id!), idModule: item.id }) : props.AddModuleClassroom({ idClassroom: parseInt(id!), idModule: item.id }); onHide() }} />
                            </Row>
                            <Padding padding="8px" />
                        </Column>
                    )
                })}
            </div>
        </Dialog>
    )
}

export default ModalAddModule