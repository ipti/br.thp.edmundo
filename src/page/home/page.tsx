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
import HomeProvider, { HomeContext } from "./context/context";
import { FormaRecover } from "./styles";
import avatar from "../../assets/image/avatar.svg"
import styled from "styled-components";
import styles from "../../Styles";
import CardHome from "../../Components/Card/CardsHome";


const Home = () => {
    return (
        <HomeProvider>
            <HomePage />
        </HomeProvider>
    )
}

const Avatar = styled.div`
  border: 1px solid ${styles.colors.colorBorderCard};
  height: 128px;
  width: 128px;
  border-radius: 50%;
  
  img {
    border-radius: 50%; /* This will make the image circular */
    height: 100%;
    width: 100%;
  }
`;


const HomeClassroomPage = () => {


    return (
        <Container style={{
            height: "100%", background: "linear-gradient(180deg, #FFFFFF 0%, #E6F0FF 100%)", padding: "64px"
        }}>
            <Row>
                <Avatar>
                    <img alt="" src={avatar} />
                </Avatar>
                <Padding />
                <Column id="center">
                    <h2>
                        Lúcio Gomes
                    </h2>
                </Column>
            </Row>
            <Padding />
            <h1>
                Bem vindo a Turma a!
            </h1>
            <Padding />
            <p>
                Visualize as suas atividades:
            </p>
            <Padding padding="16px"/>
            <div className="grid">
                <div className="col-12 md:col-3">
                    <CardHome />
                </div>
                <div className="col-12 md:col-3">
                    <CardHome />
                </div>
                <div className="col-12 md:col-3">
                    <CardHome />
                </div>
            </div>

        </Container>
    )
}

const HomePage = () => {
    const [token, setTokens] = useState<string | number | null | undefined>();
    const [search, setSearch] = useState(false);

    const propsAplication = useContext(AplicationContext)

    useEffect(() => {
        if (token?.toString().length! > 5) {
            setSearch(true)
        }
    }, [token])

    if (true) return <HomeClassroomPage />


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
                        {search ? <ClassroomFind idClassroom={token} onHide={() => { setSearch(false); setTokens("") }} />
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
    const props = useContext(HomeContext)

    const propsAplication = useContext(AplicationContext)




    const { data, isLoading, error } = useFetchRequestOneClassroom(removeLeadingZeros(idClassroom?.toString()!).toString())

    const err: any = error

    // useEffect(() => {
    //   remove()
    // }, [error])



    if (isLoading) return <ProgressSpinner />
    var classroom: Classroom = data
    return (
        <Container className="card" style={{ height: "64px" }}>
            {error ? <><h4>{err?.response.data.message}</h4><Padding /></> : <Row id="space-between">
                <Column id="center">
                    <h4>
                        {classroom?.name}
                    </h4>
                    <p>
                        {generateCode(classroom?.id)}
                    </p>
                </Column>
                <Column id="end">
                    <Button label={classroom?.isOpen ? "Entrar" : "Não disponivel"} disabled={!classroom?.isOpen} style={{ height: "48px" }} icon="pi pi-sign-in" onClick={() => {
                        props?.JoinTheClassroomClassroom({ idClassroom: classroom.id, idUser: propsAplication?.user?.id! }); onHide()
                    }} />
                </Column>
            </Row>}
            <Button label="Voltar" onClick={onHide} />
        </Container>
    )
}
export default Home;