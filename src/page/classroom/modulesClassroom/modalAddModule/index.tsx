import { Dialog } from "primereact/dialog"
import { useContext } from "react"
import { ClassroomModulesContext } from "../context/context"
import { Column, Padding, Row } from "../../../../Styles/styles"
import { Button } from "primereact/button"
import { useParams } from "react-router-dom"

const ModalAddModule = ({ onHide, visible }: { visible?: boolean | undefined, onHide(): void }) => {

    const { id } = useParams()

    const props = useContext(ClassroomModulesContext)
    return (
        <Dialog header="Adicionar Módulos" visible={visible} onHide={onHide}>
            <div style={{ gap: '16px' }}>


                {/* {props?.allmodulesList?.map((item) => {
                    return (
                        <Column>
                            <Row style={{ width: "100%" }} id="space-between">
                                <Column id="center">
                                    {item.name}
                                </Column>
                                <Padding />
                                <Button icon="pi pi-plus" onClick={() => { props.AddModuleClassroom({ idClassroom: parseInt(id!), idModule: item.id }); onHide() }} />
                            </Row>
                            <Padding />
                        </Column>
                    )
                })} */}
            </div>
        </Dialog>
    )
}

export default ModalAddModule