import { Accordion, AccordionTab } from "primereact/accordion"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ContentPage from "../../../Components/ContentPage"
import { formatarDataHours } from "../../../Controller/controllerGlobal"
import color from "../../../Styles/colors"
import { Column, Padding, Row } from "../../../Styles/styles"
import ActivitiesClassroomProvider, { ActivitiesClassroomContext } from "./context/context"

const ClassroomActivities = () => {
    return (
        <ActivitiesClassroomProvider>
            <ClassroomActivitiesPage />
        </ActivitiesClassroomProvider>
    )
}

const ClassroomActivitiesPage = () => {

    const history = useNavigate()

    const status = {
        COMPLETED: "Finalizado",
        PENDING: "Em andamento"
    }

    const propsActivitiesClassroom = useContext(ActivitiesClassroomContext)

    return (
        <ContentPage title="Atividades" description="Lista atividades enviadas pelos alunos">
            <>
                <Accordion activeIndex={0}>
                    {
                        propsActivitiesClassroom?.classroomActivitiesList?.classroom_activities.map((item) => {
                            return (
                                <AccordionTab header={item.activities.name}>
                                    {item.activities.user_activities.map((user_activities) => {
                                        return (
                                            <Row id="space-between" style={{marginBottom: "16px"}}>
                                                <Column>
                                                    <h3>
                                                        {user_activities.user_classroom.users.name}
                                                    </h3>
                                                    <Padding />
                                                    <p>Última atualização: {formatarDataHours(user_activities.updatedAt)}</p>
                                                </Column>
                                                <div onClick={() => {history(user_activities.id.toString())}} style={{ padding: 16, cursor: "pointer", borderRadius: 8, background: user_activities.status === "COMPLETED" ? color.green : user_activities.status === "PENDING" ? color.colorSecondary : "" }}>
                                                    <h4 style={{ color: "white" }}>{status[user_activities.status as keyof typeof status]}</h4>
                                                </div>
                                            </Row>
                                        )
                                    })}
                                </AccordionTab>
                            )
                        })
                    }
                </Accordion>
            </>
        </ContentPage>
    )
}

export default ClassroomActivities