import { Button } from "primereact/button"
import ContentPage from "../../../Components/ContentPage"
import { Column, Padding, Row } from "../../../Styles/styles"
import { useNavigate } from "react-router-dom"
import ListReapplicationProvider, { ListReapplicationContext } from "./context/context"
import { useContext } from "react"
import { ListReapplicationContextType } from "./context/types"
import CardProject from "../../../Components/Card/CardProject"
import Empty from "../../../Components/Empty"

const ReapplicationList = () => {
    return (
        <ListReapplicationProvider>
            <ReapplicationListPage />
        </ListReapplicationProvider>
    )
}

const ReapplicationListPage = () => {
    const history = useNavigate()

    const props = useContext(ListReapplicationContext) as ListReapplicationContextType

    return (
        <ContentPage title="Reaplicações" description="Visualize as seus locais de reaplicação">
            <Column>
                <Row id="end">
                    <Button label="Criar Reaplicação" onClick={() => { history("/reaplicacoes/criar") }} />
                </Row>
            </Column>
            <Padding padding="32px" />
            <div className="grid">
                {props.reapplicationList?.map((item) => {
                    return (
                        <div className="col-12 md:col-6 lg:col-4" key={item.id}>

                            <CardProject id={item.id} title={item.name} registrationCount={item._count.user_reapplication} classroomCount={item._count.classrooms} />
                        </div>
                    )
                })}
            </div>

            {props.reapplicationList?.length === 0 && <Empty title="Reaplicações"/>}
        </ContentPage>
    )
}

export default ReapplicationList;