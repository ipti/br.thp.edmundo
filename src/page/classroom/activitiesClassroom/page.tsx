import { useContext, useEffect, useState } from "react"
import CardActivities from "../../../Components/Card/CardActivities"
import ContentPage from "../../../Components/ContentPage"
import DropdownComponent from "../../../Components/Dropdown"
import { Padding } from "../../../Styles/styles"
import ActivitiesClassroomProvider, { ActivitiesClassroomContext } from "./context/context"
import { ClassroomModule } from "./service/types"
import Empty from "../../../Components/Empty"

const ClassroomActivities = () => {
    return (
        <ActivitiesClassroomProvider>
            <ClassroomActivitiesPage />
        </ActivitiesClassroomProvider>
    )
}

const ClassroomActivitiesPage = () => {

    const [value, setValue] = useState<ClassroomModule | undefined>()




    const propsActivitiesClassroom = useContext(ActivitiesClassroomContext)

    useEffect(() => {
        setValue(propsActivitiesClassroom?.classroomActivitiesList?.classroom_module[0])
    }, [propsActivitiesClassroom?.classroomActivitiesList?.classroom_module])




    return (
        <ContentPage title="Atividades" description="Lista atividades enviadas pelos alunos">
            <Padding padding="16px" />
            {propsActivitiesClassroom?.classroomActivitiesList?.classroom_module?.length! > 0 ? <>
                <div className="grid">
                    <div className="col-12 md:col-3">
                        <label>Módulos</label>
                        <Padding />
                        <DropdownComponent options={propsActivitiesClassroom?.classroomActivitiesList?.classroom_module} optionsLabel="module.name" value={value} onChange={(e) => setValue(e.target.value)} />
                    </div>
                </div>
                <Padding padding="16px" />
                <div className="grid">
                    {value?.classroom.classroom_activities.filter(props => props.activities?.classes.moduleId === value.module?.id).map((item, index) => {
                        return (
                            <div className="col-12 md:col-3" key={item.activities.id}>
                                <CardActivities title={item.activities.name.toString()} id={item.id} index={index} idClassroom={propsActivitiesClassroom?.classroomActivitiesList?.id!} />
                            </div>
                        )
                    })}
                </div>
            </> : <Empty title="módulos associados a turma" />}

            <>

                {/* <Accordion activeIndex={0}>
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
                </Accordion> */}
            </>
        </ContentPage>
    )
}

export default ClassroomActivities