import CardItensClassrooom from "../../../Components/Card/CardItensClassroom";
import ContentPage from "../../../Components/ContentPage";
import { generateCode } from "../../../Controller/controllerGlobal";
import { Padding } from "../../../Styles/styles";
import pessoas from "../../../assets/image/pessoasgray.svg";

import { useContext } from "react";
import meeting from "../../../assets/image/school_teacher.svg";
import OneClassroomProvider, { OneClassroomContext } from "./context/context";
import { OneClassroomContextType } from "./context/types";


const ClassroomOne = () => {
    return (
        <OneClassroomProvider>
            <ClassroomOnePage />
        </OneClassroomProvider>
    )
}

const ClassroomOnePage = () => {


    const props = useContext(OneClassroomContext) as OneClassroomContextType


    console.log(props.classroomOne)

    return (
        <ContentPage title={props.classroomOne?.classroom?.name!} description={"Dono da turma: " + props.classroomOne?.owner?.name}>

            <h3>Código da turma: {generateCode(props.classroomOne?.classroom?.id!)}</h3>
            <Padding padding="16px" />

            <div className="grid">
                <div
                    className="col-12 md:col-6"
                    onClick={() => { }}
                >
                    <CardItensClassrooom title="Membros" description="Visualize os membros da turma" icon={pessoas} count={props.classroomOne?.classroom._count.user} />
                </div>
                <div className="col-12 md:col-6">
                    <CardItensClassrooom title="Atividades" description="Visualizr as atividades da turma" icon={meeting} />
                </div>


            </div>

        </ContentPage>
    )
}


export default ClassroomOne;