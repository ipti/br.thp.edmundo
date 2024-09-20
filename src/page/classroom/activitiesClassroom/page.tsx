import { useContext } from "react"
import ContentPage from "../../../Components/ContentPage"
import ActivitiesClassroomProvider, { ActivitiesClassroomContext } from "./context/context"
import { Accordion, AccordionTab } from "primereact/accordion"
import { Row } from "../../../Styles/styles"
import color from "../../../Styles/colors"

const ClassroomActivities = () => {
    return (
        <ActivitiesClassroomProvider>
            <ClassroomActivitiesPage />
        </ActivitiesClassroomProvider>
    )
}

const ClassroomActivitiesPage = () => {

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
                                            return(
                                                <Row id="space-between">
                                                    <h3>

                                                    {user_activities.user_classroom.users.name}
                                                    </h3>
                                                    <div style={{padding: 16,background: user_activities.status === "COMPLETED" ?  color.green : user_activities.status === "PENDING" ? color.colorSecondary : ""}}>
                                                        <h4>{user_activities.status}</h4>
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