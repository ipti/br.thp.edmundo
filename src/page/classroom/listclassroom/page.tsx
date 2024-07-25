import { Button } from "primereact/button";
import ContentPage from "../../../Components/ContentPage";
import { Column, Row } from "../../../Styles/styles";
import { useNavigate } from "react-router-dom";

const ClassroomList = () => {

    const history = useNavigate()
    return (
        <ContentPage title="Turmas" description="Visualize as suas turmas">
            <Column>
                <Row id="end">
                    <Button label="Criar Turma" onClick={() => { history("/turmas/criar") }} />
                </Row>
            </Column>
            <div>

            </div>
        </ContentPage>
    )
}

export default ClassroomList;