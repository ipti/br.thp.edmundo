import { useParams } from "react-router-dom";
import CardItensClassrooom from "../../../Components/Card/CardItensClassroom";
import ContentPage from "../../../Components/ContentPage";
import { generateCode } from "../../../Controller/controllerGlobal";
import { Padding } from "../../../Styles/styles";
import pessoas from "../../../assets/image/pessoasgray.svg";

import meeting from "../../../assets/image/school_teacher.svg";
import { useFetchRequestOneClassroom } from "../listclassroom/service/query";
import { Classroom } from "../listclassroom/context/types";

const ClassroomOne = () => {

    const {id} = useParams()

    
    const { data } = useFetchRequestOneClassroom(id!)


    var classroom: Classroom = data
    return (
        <ContentPage title={classroom.name} description="Dono da turma: João Carlos Batista">

            <h3>Código da turma: {generateCode(classroom.id)}</h3>
            <Padding padding="16px" />

            <div className="grid">
                <div
                    className="col-12 md:col-6"
                    onClick={() => { }}
                >
                    <CardItensClassrooom title="Membros" description="Visualize os membros da turma" icon={pessoas} />
                </div>
                <div className="col-12 md:col-6">
                    <CardItensClassrooom title="Atividades" description="Visualizr as atividades da turma" icon={meeting} />
                </div>


            </div>

        </ContentPage>
    )
}


export default ClassroomOne;