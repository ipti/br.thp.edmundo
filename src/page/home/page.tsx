import { Button } from "primereact/button";
import { InputOtp } from "primereact/inputotp";
import { ProgressSpinner } from "primereact/progressspinner";
import { useContext, useEffect, useState } from "react";
import forma from "../../assets/image/person-recover.png";
import { AplicationContext } from "../../context/context";
import { generateCode, removeLeadingZeros } from "../../Controller/controllerGlobal";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import { useFetchRequestOneClassroom } from "../classroom/listclassroom/service/query";
import { Classroom } from "../classroom/oneClassroom/service/type";
import { FormaRecover } from "./styles";

const Home = () => {
    const [token, setTokens] = useState<string | number | null | undefined>();
    const [search, setSearch] = useState(false);

    const propsAplication = useContext(AplicationContext)

    useEffect(() => {
        if (token?.toString().length! > 5) {
            setSearch(true)
        }
    }, [token])


    return (
        <div style={{
            height: "100%", background: "linear-gradient(180deg, #FFFFFF 0%, #E6F0FF 100%)"
        }} >

            <Column style={{ height: "100%" }} id="center">
                <Row>
                    <Padding padding="64px" />
                    <Column id="center">
                        <h1>Bem vindo, {propsAplication?.user?.name}!</h1>
                        <h3>Faça a busca da turma.</h3>
                        <Padding padding="8px" />
                        {search ? <ClassroomFind idClassroom={1} onHide={() => {setSearch(false) }} />
                            : <InputOtp pt={{
                                input: {
                                    style: {
                                        height: 128,
                                        width: 128,
                                        fontSize: 32
                                    }
                                }
                            }}
                                value={token} onChange={(e) => setTokens(e.value)} length={6} integerOnly />}
                    </Column>
                </Row>
            </Column>

            <FormaRecover>
                <img src={forma} alt="" />
            </FormaRecover>
        </div>
    )
}


const ClassroomFind = ({ idClassroom, onHide }: { idClassroom: string | number | null | undefined, onHide(): void }) => {
    // const propsAplication = useContext(AplicationContext) as PropsAplicationContext



    const { data, isLoading } = useFetchRequestOneClassroom(removeLeadingZeros(idClassroom?.toString()!).toString())


    if (isLoading) return <ProgressSpinner />
    var classroom: Classroom = data
    return (
        <Container className="card" style={{ height: "128px" }}>
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
                    <Button label={classroom.isOpen ? "Entrar" : "Não disponivel"} disabled={!classroom.isOpen} style={{ height: "48px" }} icon="pi pi-sign-in" onClick={() => {
                        // props.JoinTheClassroomClassroom({ idClassroom: classroom.id, idUser: propsAplication.user?.id! }); onHide()
                    }} />
                </Column>
            </Row>
            <Button label="Voltar" onClick={onHide} />
        </Container>
    )
}
export default Home;