import { Button } from "primereact/button";
import ContentPage from "../../../Components/ContentPage";
import { Column, Padding, Row } from "../../../Styles/styles";
import { useNavigate } from "react-router-dom";
import ListClassroomProvider, { ListClassroomContext } from "./context/context";
import CardClassroom from "../../../Components/Card/CardClassroom";
import { useContext } from "react";
import { ListClassroomContextType } from "./context/types";
import Empty from "../../../Components/Empty";

const ClassroomList = () => {
    return (
        <ListClassroomProvider>
            <ClassroomListPage />
        </ListClassroomProvider>
    )
}

const ClassroomListPage = () => {

    const props = useContext(ListClassroomContext) as ListClassroomContextType

    const history = useNavigate()
    return (
        <ContentPage title="Turmas" description="Visualize as suas turmas">
            <Column>
                <Row id="end">
                    <Button label="Criar Turma" onClick={() => { history("/turmas/criar") }} />
                </Row>
            </Column>
            <Padding padding="16px" />
            <div className="grid">
                {props.classroomList?.map((item) => {
                    return (
                        <div className="col-12 md:col-6 lg:col-4" key={item.id}>

                            <CardClassroom id={item.id} title={item.name} registrationCount={item._count.user}  />
                        </div>
                    )
                })}
            </div>

            {props.classroomList?.length === 0 && <Empty title="turmas" />}
        </ContentPage>
    )
}

export default ClassroomList;