import { Dialog } from "primereact/dialog"
import { useContext } from "react"
import { ClassroomModulesContext } from "../context/context"
import { Column, Padding, Row } from "../../../../Styles/styles"
import { Button } from "primereact/button"
import { useParams } from "react-router-dom"

const ModalAddClasse = ({ onHide, visible }: { visible?: boolean | undefined, onHide(): void }) => {

    const { id } = useParams()

    const props = useContext(ClassroomModulesContext)
    return (
        <Dialog header="Adicionar Aula" visible={visible} onHide={onHide}>
            <div style={{ gap: '16px' }}>


                {/* {props?.allclasseList?.map((item: any) => {
                    return (
                        <Column>
                            <Row style={{ width: "100%" }} id="space-between">
                                <Column id="center">
                                    {item.name}
                                </Column>
                                <Padding />
                                <Button icon="pi pi-plus" onClick={() => { props.AddclasseClassroom({ idClassroom: parseInt(id!), idClasse: item.id }); onHide() }} />
                            </Row>
                            <Padding />
                        </Column>
                    )
                })} */}
            </div>
        </Dialog>
    )
}

export default ModalAddClasse