import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputOtp } from 'primereact/inputotp';
import { useContext, useState } from "react";
import { Container } from "../../../../Components/Card/CardClassroom/style";
import Loading from "../../../../Components/Loading";
import { AplicationContext } from "../../../../context/context";
import { PropsAplicationContext } from "../../../../context/type";
import { generateCode, removeLeadingZeros } from "../../../../Controller/controllerGlobal";
import { Column, Padding, Row } from "../../../../Styles/styles";
import { ListClassroomContext } from "../context/context";
import { Classroom, ListClassroomContextType } from "../context/types";
import { useFetchRequestOneClassroom } from "../service/query";

const SearchModal = ({ onHide, visible }: { onHide(): void, visible?: boolean | undefined }) => {
    const [token, setTokens] = useState<string | number | null | undefined>();
    const [search, setSearch] = useState(false);

    return (
        <Dialog onHide={onHide} visible={visible} style={{ width: window.innerWidth > 600 ? "30%" : "90%" }} header="Buscar turma">
            <Padding />
            <Column>
                <Row id="space-between">

                    <div>
                        <span>
                            Digite o código da turma
                        </span>
                        <Padding />
                        <InputOtp value={token} onChange={(e) => setTokens(e.value)} length={6} integerOnly />
                    </div>
                    <Column id="end">
                        <Button label="Buscar" style={{ height: "48px" }} icon="pi pi-search" disabled={token?.toString().length !== 6} onClick={() => setSearch(true)} />
                    </Column>
                </Row>
                <Padding padding="16px" />
                {search && <ClassroomFind idClassroom={token} onHide={onHide}/>}
            </Column>
        </Dialog>
    )
}


const ClassroomFind = ({ idClassroom, onHide }: { idClassroom: string | number | null | undefined, onHide(): void }) => {
    const props = useContext(ListClassroomContext) as ListClassroomContextType
    const propsAplication = useContext(AplicationContext) as PropsAplicationContext

   

    const { data, isLoading } = useFetchRequestOneClassroom(removeLeadingZeros(idClassroom?.toString()!).toString())


    if (isLoading) return <Loading />
    var classroom: Classroom = data
    return (
        <Container className="card">
            <Row id="space-between">
                <Column id="center">
                    <h4>
                        {classroom.name}
                    </h4>
                    <p>
                        {generateCode(classroom.id)}
                    </p>
                </Column>
                <Column id="end">
                    <Button label={classroom.isOpen ? "Entrar" : "Não disponivel" } disabled={!classroom.isOpen} style={{ height: "48px" }} icon="pi pi-sign-in" onClick={() => { props.JoinTheClassroomClassroom({idClassroom: parseInt(idClassroom?.toString()!), idUser: propsAplication.user?.id!}); onHide()}} />
                </Column>
            </Row>
        </Container>
    )
}

export default SearchModal