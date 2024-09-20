import { Button } from "primereact/button";
import { InputOtp } from "primereact/inputotp";
import { ProgressSpinner } from "primereact/progressspinner";
import { useContext, useEffect, useState } from "react";
import forma from "../../assets/image/person-recover.png";
import { AplicationContext } from "../../context/context";
import { generateCode, removeLeadingZeros, ROLE } from "../../Controller/controllerGlobal";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import { useFetchRequestOneClassroom } from "../classroom/listclassroom/service/query";
import { Classroom } from "../classroom/oneClassroom/service/type";
import HomeProvider, { HomeContext } from "./context/context";
import { FormaRecover } from "./styles";
import avatar from "../../assets/image/avatar.svg"
import styled from "styled-components";
import styles from "../../Styles";
import CardHome from "../../Components/Card/CardsHome";
import { useNavigate } from "react-router-dom";
import IconClassroom from "./../../assets/image/cardturmas.svg";



const Home = () => {
    return (
        <HomeProvider>
            <HomeSearchClassroomPage />
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
    const propsAplication = useContext(AplicationContext)
    const propsHome = useContext(HomeContext)
    const history = useNavigate()


    if (!propsHome?.classroomUser) return <ProgressSpinner />


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
                        {propsAplication?.user?.name}
                    </h2>
                </Column>
            </Row>
            <Padding />
            <h1>
                Bem vindo a {propsHome?.classroomUser[0]?.name}!
            </h1>
            <Padding />
            <p>
                Visualize os modulos da turma:
            </p>
            <Padding padding="16px" />
            <div className="grid">

                {propsHome?.classroomUser![0].classroom_module?.map((item, index) => {
                    return (
                        <div key={index} className="col-12 md:col-3" style={{cursor: item.active ? "pointer" : "not-allowed"}} onClick={() => {
                            if(item.active) history("/turma/" + propsHome?.classroomUser![0].id + "/modulo/" + item.module.id)
                        }} >
                            <CardHome name={item.module.name} status={item.active} index={index} />
                        </div>
                    )
                })}
            </div>

        </Container>
    )
}


const HomeSearchClassroomPage = () => {
    const [token, setTokens] = useState<string | number | null | undefined>();
    const [search, setSearch] = useState(false);
    const history = useNavigate()

    const propsAplication = useContext(AplicationContext)

    const propsHome = useContext(HomeContext)

    useEffect(() => {
        if (propsAplication?.user?.role !== ROLE.STUDENT) {
            history("/reaplicacoes")
        }
    }, [history, propsAplication?.user?.role])


    useEffect(() => {
        if (token?.toString().length! > 5) {
            setSearch(true)
        }
    }, [token])

    if (propsHome?.classroomUser?.length! > 0) return <HomeClassroomPage />


    return (
        <div style={{
            height: "100%", background: "linear-gradient(180deg, #FFFFFF 0%, #E6F0FF 100%)"
        }} >
            <Column style={{ height: "100%", padding: "4%" }} id="center">
                <Row >

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

        <Container className="card" style={{ height: "75px", width: "auto" }}>
            {error ? <><h4>{err?.response.data.message}</h4><Padding /></> : <Row id="space-between">
                <Row style={{ width: "100%" }}>
                    <img src={IconClassroom} alt="" />
                    <Padding />
                    <Column id="center">
                        <h4>
                            {classroom?.name}
                        </h4>
                        <p>
                            {generateCode(classroom?.id)}
                        </p>
                    </Column>
                </Row>
                <Column id="end">
                    <Button label={classroom?.isOpen ? "Entrar" : "Não disponivel"} disabled={!classroom?.isOpen} style={{ height: "48px" }} icon="pi pi-sign-in" onClick={() => {
                        props?.JoinTheClassroomClassroom({ idClassroom: classroom.id, idUser: propsAplication?.user?.id! }); onHide()
                    }} />
                </Column>
            </Row>}
            <Padding padding="8px" />
            <Button style={{ marginTop: "auto" }} label="Voltar" onClick={onHide} />
        </Container>
    )
}
export default Home;