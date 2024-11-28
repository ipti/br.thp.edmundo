import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import avatar from "../../assets/image/avatar.svg";
import pessoa from "../../assets/image/pessoa_visao.svg";
import CardHome from "../../Components/Card/CardsHome";
import DropdownComponent from "../../Components/Dropdown";
import ListMembers from "../../Components/ListMembers";
import Loading from "../../Components/Loading";
import { AplicationContext } from "../../context/context";
import styles from "../../Styles";
import color from "../../Styles/colors";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import HomeModulesProvider, { HomeModulesContext } from "./context/context";
import { ImagePessoa } from "./styles";
import { Class } from "./type";



const HomeModules = () => {
    return (
        <HomeModulesProvider>
            <HomeModulePage />
        </HomeModulesProvider>
    )
}

const Avatar = styled.div`
  border: 1px solid ${styles.colors.colorBorderCard};
  height: 64px;
  width: 64px;
  border-radius: 50%;
  
  img {
    border-radius: 50%; /* This will make the image circular */
    height: 100%;
    width: 100%;
  }
`;


const HomeModulePage = () => {
    const history = useNavigate()
    const { idClassroom, idModule } = useParams()

    const [classes, setClass] = useState<Class | undefined>()
    const propsAplication = useContext(AplicationContext)


    const propsHome = useContext(HomeModulesContext)

    useEffect(() => {
        if (propsHome?.modules?.classes) {
            if (propsHome?.modules?.classes[0]) {
                setClass(propsHome?.modules?.classes[0])
            }
        }
    }, [propsHome?.modules?.classes])

    if (!propsHome?.modules) return <Loading />


    return (
        <Container style={{
            height: "100%", background: "linear-gradient(180deg, #FFFFFF 0%, #E6F0FF 100%)", padding: "64px 64px 0 64px"
        }}>
            <Row>
                <Avatar>
                    <img alt="" src={propsAplication?.user?.registration![0]?.avatar_url ? propsAplication?.user?.registration![0]?.avatar_url : avatar} />
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
                {propsHome.modules.name}
            </h1>
            <Padding />
            <p>
                Visualize as suas atividades:
            </p>
            <Padding padding="16px" />
            <div className="grid">
                <div className="col-12 md:col-4">
                    <label>Selecione a aula</label>
                    <Padding />
                    <DropdownComponent options={propsHome?.modules!.classes} value={classes} onChange={(e) => setClass(e.target.value)} placerholder="selecione a aula" />
                </div>
            </div>
            <Padding padding="16px" />

            <div className="grid">
                <div className="col-12 md:col-9">
                    <div className="grid">
                        {classes?.activities?.map((item, index) => {
                            return (
                                <div className="col-12 md:col-5"
                                    style={{ cursor: item?.classroom_activities[0]?.active ? "pointer" : "not-allowed" }}
                                    onClick={() =>
                                        item?.classroom_activities[0]?.active ? history("/turma/" + idClassroom + "/modulo/" + idModule + "/atividade/" + item.id) : null
                                    }>
                                    <CardHome name={item.name} status={item?.classroom_activities[0]?.active} index={index} />
                                </div>
                            )
                        })}
                        {classes?.activities.length === 0 && <Column id="end">
                            <Row id="space-between">
                                <ImagePessoa>
                                    <img src={pessoa} alt="Não existe atividades"
                                    />
                                </ImagePessoa>
                                <Column id="center">
                                    <div style={{ height: "100px", background: color.colorFourth }} className="card">
                                        <Column id="center">
                                            <h2>Não existe atividade!</h2>
                                            <p>Não há material cadastrado no módulo.</p>
                                        </Column>
                                    </div>
                                </Column>
                            </Row>
                        </Column>}
                    </div>
                </div>
                <div className="col-12 md:col-3">
                    <ListMembers users={propsHome.modules.classroom_module[0].classroom.user!} />
                </div>
            </div>
            {propsHome?.modules?.classes.length === 0 && <h3>Sem atividades</h3>}

        </Container>
    )
}



export default HomeModules;