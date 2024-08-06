import CardItensClassrooom from "../../../Components/Card/CardItensClassroom";
import ContentPage from "../../../Components/ContentPage";
import { Padding } from "../../../Styles/styles";
import pessoas from "../../../assets/image/pessoasgray.svg";

import meeting from "../../../assets/image/school_teacher.svg";

const ClassroomOne = () => {
    return (
        <ContentPage title="Turmas" description="Dono da turma: João Carlos Batista">

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