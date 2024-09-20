import { ProgressSpinner } from "primereact/progressspinner";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import avatar from "../../assets/image/avatar.svg";
import CardHome from "../../Components/Card/CardsHome";
import DropdownComponent from "../../Components/Dropdown";
import styles from "../../Styles";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import HomeModulesProvider, { HomeModulesContext } from "./context/context";
import { Class } from "./type";
import { useNavigate, useParams } from "react-router-dom";
import { AplicationContext } from "../../context/context";



const HomeModules = () => {
    return (
        <HomeModulesProvider>
            <HomeModulePage />
        </HomeModulesProvider>
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


const HomeModulePage = () => {
    const history = useNavigate()
    const { idClassroom, idModule } = useParams()

    const [classes, setClass] = useState<Class | undefined>()
    const propsAplication = useContext(AplicationContext)


    const propsHome = useContext(HomeModulesContext)

    useEffect(() => {
        if (propsHome?.modules?.classes[0]) {
            setClass(propsHome?.modules?.classes[0])
        }
    }, [propsHome?.modules?.classes])

    if (!propsHome?.modules) return <ProgressSpinner />


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
                Bem vindo ao {propsHome.modules.name}
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
                {classes?.activities?.map((item, index) => {
                    return (
                        <div className="col-12 md:col-3"
                        style={{cursor: item?.classroom_activities[0]?.active ? "pointer" : "not-allowed"}}
                        onClick={() => 
                            item?.classroom_activities[0]?.active ? history("/turma/" + idClassroom + "/modulo/" + idModule + "/atividade/" + item.id) : null
                        }>
                            <CardHome name={item.name} status={item?.classroom_activities[0]?.active} index={index} />
                        </div>
                    )
                })}
            </div>

        </Container>
    )
}



export default HomeModules;